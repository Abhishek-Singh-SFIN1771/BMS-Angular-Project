# PROJECT OVERVIEW
* The Book Management System (BMS) is a web-based application designed to help users efficiently manage and organize books in a digital environment. This system is particularly useful for libraries, bookstores, educational institutions, and individuals who wish to keep track of their book collections and transactions.

## INSTALLATION AND SETUP (Prerequisites)

 1.Install VS CODE:-
 * Install the latest version of VS Code in your system
 * Ensure that latest version of git is instaled and configureed.


## FEATURES
* User Model: handles user regirtration adn authentication
* Book management module: Allow Users to add, delete, update, retreive the book details
* Amin module: Enable administrations to review, approve, or reject Book details.
* Error and Expection handling Module: Robust error handling mechanisms to ensure a smooth user experience.
## TECH-STACK
* Programming Languages:- Javascript/TypeScript , Node.js

* Frameworks:- Angular, Tailwind, loopback4/Express.js

* Tools:- Vs code, Git, GitHub

* Database:- PostgreSql

* Other:- Html, Css , typeScript

##  Project Plan for Book Management System (BMS)
### Step 1
* SDLC(Software Development Life Cycle) Steps :-
    * -> Requirements :- Users can add, view, update, and delete books.
    * -> Book fields: Title, Author, ISBN, Publication Date, Genre.
    * -> Admin panel for management.
 
* Designing :-
    * -> Front-End: Form for adding books using (HTML, CSS, JavaScript)
    * -> Architecture: Client-server model with 3-tier architecture(View , Controller , Model-Logic part).
    * -> Data Base Management: Books stored in database (table: books)
 
* Implementation :-
    * -> Frontend: HTML, CSS, JavaScript/TypeScript - framework:- Angular
    * -> Backend: Node.js - framework:- Express.js / Loopback4
    * -> Database: SQL
 
* Testing :-
    * -> Manual testing: Add, edit, delete, retrieve books
 
* Deployment :-
    * -> GitHub- Source Code of Project
    * -> AWS - Remote Server for website hosting
 
* Maintenance :-
    * -> Bug fixes 
    * -> Updates and performance improvements
 
### Step 2
* i. Client-Server Model
  
                           HTTP request
        Browser          ----------------->            Server
  (Client - Html Form)   <-----------------   (Backend - Business logic)
                            HTTP response

* 3-Tier Architecture [View - Controller - Service(Model)]
  
  -   Web Browser [ Presentation Layer (HTML/JS) ]
  -   Back-End Server [ Logic Layer (Server-side Code) ]
  -   Database [ Data Layer (PostgreSqll) ]

### Step 3 Basic HTML Page for Book Form
  * Project Repo Link for source code :-
     -  https://github.com/Abhishek-Singh-SFIN1771/BMS-Angular
 
### Step 4 Set Up a GitHub Repository and push source code
  * -> Repo name = Abhishek-Singh-SFIN1771-BMS-Angular
  * -> Push source code




# BMSAngularProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
