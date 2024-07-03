# API automatic tests of store with pets

## Project description and main functionalities

Given project was established in order to test communication between user and server (requests from user and responses from server) within pet store. As a functionalities, user is able to get information about pets or orders, place orders, delete them, update data about orders and pets from the store. In addition user might create an account, log in, log out and delete an account. Every request from user has its status code and response from server in form of JSON format.





## Project configuration

1. The first step is to run a command "npm install" in console
2. Docker should be run
3. The next issue is creating scripts for switching on server and running tests in package.json file
- to turn on server "npm run startServer"
- to run all tests "npm run testAll"
4. After turning on Docker it is necessary to run command "npm run startServer" in console

## Frameworks used in the project

The project was written using TypeScript. Main frameworks and their versions are described below:

- mocha ^10.4.0 - framework which was used to organize tests (describe and it) and define assertion and hooks (before, after, beforeEach, afterEach).

- chai ^4.3.4 - library used to assertion (expect). It allows testers to write readable tests.

- supertest ^7.0.0 - main supertest's functions are: sending HTTP requests (GET, POST, PUT, DELETE etc.) then verifying responses, testing API endpoints and interactions with server which allows testers to write comprehensive end-to-end tests.

- @faker-js/faker ^8.4.1  - library which generates fake test data such as user names, emails, phone numbers, dates and more.

- prettier ^3.3.2 - useful tool for automatic code formatting and ensuring consistency of code style in a project.

-  mochawesome ^7.1.3 - it is a reporter for framework Mocha which generates complex HTML reports from test results.


## Docker

The project was launched using Docker application known as open-source platform which enables creating, introducing and running an app in isolated environments called containers. Thanks to Docker, problems with dependencies and environment conflicts were minimized within the project.


## Project documentation

Here is the official link to the documentation: https://petstore.swagger.io/#/

