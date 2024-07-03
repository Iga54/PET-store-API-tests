# API automatic tests of store with pets

- Given project was established in order to test communication between user and server (requests from user and responses from server) within pet store. As a functionalities, user is able to get information about pets or orders, place orders, delete them, update data about orders and pets from the store. In addition user might create an account, log in, log out and delete an account. Every request from user has its status code and response from server in form of JSON format.


The project was written using TypeScript. Main frameworks and their versions are described below:

    mocha: "^10.4.0" - framework which was used to organize tests (describe and it) and define assertion and hooks (before, after, beforeEach, afterEach).

    chai: "^4.3.4" - library used to assertion (expect). It allows testers to write readable tests.

     supertest: "^7.0.0" - main supertest's functions are: sending HTTP requests (GET, POST, PUT, DELETE etc.) then verifying responses, testing API endpoints and interactions with server which allows testers to write comprehensive end-to-end tests.

     @faker-js/faker: "^8.4.1" - library which generates fake test data such as user names, emails, phone numbers, dates and more.

    prettier: "^3.3.2" - useful tool for automatic code formatting and ensuring consistency of code style in a project.

    mochawesome: "^7.1.3" - it is a reporter for framework Mocha which generates complex HTML reports from test results.

Project configuration

npm install (perspektywa jak ktos sciaga projekt)

uruchomienie dockera

uruchomienie skryptu


Instalacja: Krok po kroku, jak zainstalować i uruchomić projekt lokalnie. To powinno obejmować instrukcje dotyczące klonowania repozytorium, instalacji zależności oraz uruchomienia aplikacji. Jak Testować Projekt: Informacje, jak uruchomić testy. Jeśli projekt używa specyficznych narzędzi do testowania, warto podać instrukcję, jak je skonfigurować i uruchomić.

Konfiguracja: Jeśli projekt wymaga specjalnej konfiguracji, opisz tutaj wymagane kroki. DOCKER

Docker

The project was launched using Docker application known as open-source platform which enables creating, introducing and running an app in isolated environments called containers. Thanks to Docker, problems with dependencies and environment conflicts were minimized within the project.


Project documentation

Here is the official link of the documentation: https://petstore.swagger.io/#/

