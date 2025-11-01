import React, { useState } from "react";
import { Link } from "react-router";
import { createPost } from "../services/PostServices";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;
    console.log(title, body);
    // 19.3 save data
    createPost({ title, body }).then((res) => {
      console.log(res);
    });
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <h3>Create Post</h3>

      <section className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={submit}
          className="max-w-md w-full bg-white rounded p-6 space-y-4"
        >
          <div className="mb-4">
            <h2 className="text-xl font-bold">Create Post</h2>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="title"
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              type="text"
              placeholder="description"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-start">
            <Link
              className="bg-blue-600 px-4 py-2 rounded text-white flex justify-center"
              to="/"
            >
              Go Back
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
