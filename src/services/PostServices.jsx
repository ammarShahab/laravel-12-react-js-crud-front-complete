// 1. first we need to create an API url. we need to create api first for crud operation using laravel backend then put url here. that's why we need to install Laravel application for creating apis.
// 2. run xammp apache and mysql server
// 3. open terminal and command "laravel new" => project name "laravel-12-react-js-crud-back" => none => Pest
// 4.  Which database will your application use? mysql
// 5.  Default database updated. Would you like to run the default database migrations? no
// 6. now open in vs code
// 7. go to xammp => mysql admin

import axios from "axios";

// 8. now to create model and migration for post so in terminal "php artisan make:model Post -m" which will create a file in database => migration "2025_10_30_195851_create_posts_table"

// 9.In .env file change the DB_DATABASE=laravel_12_react_js_crud_back_api and in db create a new db according to the name "laravel_12_react_js_crud_back_api".

// 10. now on "2025_10_30_195851_create_posts_table" file we will design the table header row what the table will contain. so add $table->string('title') and $table->text('body') in the schema. then run the command 'php artisan migrate' to create the table in the db. so go to the "laravel_12_react_js_crud_back" in db and there is a folder created name "posts" and there u will find the table according to the schema.

//11. Now rest of the flow chart is "laravel-12-react-js-crud-back" file i.e form 12.

// 19.0 set the url from backend
const API_URL = "http://127.0.0.1:8000/api";

// 19.1 make getAll function using axios
export const getPost = () => axios.get(API_URL + "/posts");

// 19.2 save data to the db
export const createPost = (data) => axios.post(API_URL + "/posts", data);
// 21.6 edit a data to the db
export const editPost = (id, data) => axios.put(API_URL + `/posts/${id}`, data);
// 22.0 delete a post
export const deletePost = (id) => axios.delete(API_URL + `/posts/${id}`);
