# Employee Project
This is simple backend application using spring boot and sql database.

# Prerequisites
- IntelliJ IDEA (or any other Java IDE)
- PostgreSQL (for the database)

# Database
You need to create your database.
1. CREATE DATABASE employee_db
2. CREATE TABLE employee(
	id serial PRIMARY KEY,
	department varchar(30) not null,
	email varchar(30) not null,
	employee_name varchar(30) not null,
	phone varchar(20) not null
)
3. insert some data for example:
   INSERT INTO employee(department,email,employee_name,phone) VALUES ('IT','johndoe@gmail.com','John Doe', 987-7896)

Configuration file:
- in application.properties (location: employee_server/src/main/resources/application.properties) change the password to your password you create for your server with databases in postgresql.

# Running the Project
1. Open the project in IntelliJ IDEA.
2. Build and run the Spring application from within the IDE.

you can API calls on [Postman.com](https://www.postman.com/)
