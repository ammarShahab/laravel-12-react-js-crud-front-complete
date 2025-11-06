1. first we need to create an API url. we need to create api first for crud operation using laravel backend then put url here. that's why we need to install Laravel application for creating apis.

2. run xammp apache and mysql server

3. open terminal and command "laravel new" => project name "laravel-12-react-js-crud-back" => none => Pest

4. Which database will your application use? mysql

5. Default database updated. Would you like to run the default database migrations? no

6. now open in vs code

7. go to xammp => mysql admin

8. now to create model and migration for post so in terminal "php artisan make:model Post -m" which will create 2 files one is in database => migration "2025_10_30_195851_create_posts_table" and another is app => Model => Post

9.In .env file change the DB_DATABASE=laravel_12_react_js_crud_back_api and in db create a new db according to the name "laravel_12_react_js_crud_back_api".

10. now on "2025_10_30_195851_create_posts_table" file we will design the table header row what the table will contain. so add $table->string('title') and $table->text('body') in the schema. then run the command 'php artisan migrate' to create the table in the db. so go to the "laravel_12_react_js_crud_back_api" in db and there is a folder created name "posts" and there u will find the table according to the schema.

11. Now rest of the flow chart is in "laravel-12-react-js-crud-back" file i.e form 12.

12. add fillable in a app => Model => Post file what i added in the schema i.e title and body in the db

13. now to install api in terminal run "php artisan install:api" and in terminal when say "One new database migration has been published. Would you like to run all pending database migrations? (yes/no) [yes]"

14. a file created in folder routes => api.php in folder and created an initial routes

15. here we will define our api routes later

16. now we are going to create resource controller by "php artisan make:controller PostController --resource" which will create a file name "PostController" in app => Http => Controllers => PostController where we will create all the crud methods.

17. create Route then to see all routes run "php artisan route:list" u will see created all routes for PostController in terminal                                                           Note: here we created a rote name 'post' and from the frontend we will use that route for all the crud operation.

18. checking in thunder client that the request is working or not on pasting the link 'http://127.0.0.1:8000/api/posts'

18.1 then again also checked that is we are getting the value or not but we are getting the empty [] because there is no data is created.

18.2 creating data to the db we use the store function and using thunder client we will it is working or not.

18.3 get a specific data by id we will use show api

18.4 update a single value

18.5 delete a data and rest flow 19. is in frontend

19.0 set the url from backend

19.1 make getAll function using axios

19.2 save data to the db

19.3 save data

20.0 created a table and showing the data

21.0 edit a data

22.0 delete a post


// Seeding (for sending fake data to the db). The seeding is not implemented this project. Seeding is applied in backebd_digi5 repo. The procedures are following:

first make a seeder file in laravel
1. run "php artisan make:seeder DomainHostSeeder"
2. Then design the DomainHostSeeder for one of the page section in my case i am designing hero section.
3. name of the seeder table name is as like as name of Schema table name in my case "domain_host_heroes"
4. In file Seeder => Database Seeder in run block add your seeder name in my case "DomainHostSeeder" (One time)
5. run "php artisan db:seed" if found error then run "php artisan migrate:fresh --seed" which will add data to the db
