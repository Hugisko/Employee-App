# Employee Project
This is a simple full stack application using react, java spring boot and sql database.

# Prerequisites
- IntelliJ IDEA (or any other Java IDE)
- PostgreSQL (for the database)
- Node.js
- NPM (Node Package Manager)

# React Frontend

1. Navigate to the project's frontend directory:

```shell
    cd client
```

2. Install the project dependencies:

```shell
    npm install
```

3. Run App:

```shell
    npm run dev
```

The React development server will start, and you can access the frontend application at [http://localhost:5173/](http://localhost:5173/)

# Database
You need to create your database.
1. Create database 
   
```shell
    CREATE DATABASE employee_db
```
2. Create table

```shell
    CREATE TABLE employee(
	id serial PRIMARY KEY,
	department varchar(30) not null,
	email varchar(30) not null,
	employee_name varchar(30) not null,
	phone varchar(20) not null
	)
```
3. Insert some data for example:

```shell
    INSERT INTO employee(department,email,employee_name,phone) VALUES ('IT','johndoe@gmail.com','John Doe', 987-7896)
```
   

Configuration file:
- in application.properties (location: employee_server/src/main/resources/application.properties) change the password to your password you create for your server with databases in postgresql.

# Running the Server
1. Open the project in IntelliJ IDEA.
2. Build and run the Spring application from within the IDE.

You can test API calls on [Postman.com](https://www.postman.com/)

The Spring backend will start at [http://localhost:8080/api/employees](http://localhost:8080/api/employees).
