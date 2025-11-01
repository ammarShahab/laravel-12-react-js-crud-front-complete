import React, { useEffect, useState } from "react";
import { deletePost, editPost, getPost } from "../services/PostServices";
import { Link } from "react-router";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPost().then((res) => {
      setPosts(res.data);
      console.log(res.data);
    });
  }, []);

  //   21.0 edit a data
  const handleEdit = (post) => {
    setSelectedPost(post);
    console.log(post);

    setOpen(true);
  };

  //   21.5
  const handleSave = (id, post) => {
    editPost(id, post).then((res) => console.log(res.data));
  };

  //   22.1
  const handleDelete = (id) => {
    deletePost(id).then((res) => {
      setPosts(posts.filter((post) => post.id !== id));
      console.log(res.data);
      console.log(res);
    });
  };
  return (
    // 20.0 created a table and showing the data
    <>
      <div className="max-w-7xl mx-auto">
        <div>
          <h3>Postlist</h3>
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <div className="text-left mb-4">
                    <Link
                      to="/create"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Create
                    </Link>
                  </div>

                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr className="text-center">
                        <th className="text-sm font-medium text-gray-900 px-6 py-4">
                          #
                        </th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4">
                          Title
                        </th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4">
                          Body
                        </th>
                        <th className="text-sm font-medium text-gray-900 px-6 py-4">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post, index) => (
                        <tr
                          key={post.id}
                          className="bg-gray-100 border-b text-center"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4">
                            {post.title}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4">
                            {post.body}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4">
                            <button
                              onClick={() => handleEdit(post)}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => handleDelete(post.id)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal outside main container */}
      <Modal
        center
        open={open}
        onClose={() => setOpen(false)}
        closeOnOverlayClick={true}
        styles={{
          modal: { zIndex: 9999, overflow: "auto", maxHeight: "90vh" },
        }}
      >
        <form className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Edit Post</h2>
          </div>
          {/* 21.1 editing selected data */}
          {selectedPost && (
            <>
              <div>
                <input
                  className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                  name="title"
                  //   21.2
                  value={selectedPost.title}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, title: e.target.value })
                  }
                  type="text"
                  placeholder="title"
                  // onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                  name="body"
                  //   21.3
                  value={selectedPost.body}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, body: e.target.value })
                  }
                  type="text"
                  placeholder="description"
                  // onChange={handleInputChange}
                />
              </div>
              <div>
                <button
                  // 21.4
                  onClick={handleSave(selectedPost.id, selectedPost)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </form>
      </Modal>
    </>
  );
};

export default PostList;
