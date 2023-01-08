# rooms-school-api

## API Room School to manage rooms and students

## About Code

The app is made from scratch. The technological stack is full Javascript with the ORM [SailsJS](https://sailsjs.com)

The project uses the following fundamental dependencies (libraries) for the solution:

* [**N**ode.js](https://nodejs.org): runtime environment
* [Sails.js](https://sailsjs.com): ORM backend framework


### Prerequisites

1. Install [Node.js](https://nodejs.org)

### Installing dependencies (libraries)

First, enter the base folder of the project directory:

```sh
$ cd rooms-school-api
```
Second, install dependencies

```sh
$ npm install
```
Run project

```sh
$ sails lift
```



### Creating a MySQL database

A database should be created with mysql, the tables involved can be found api/bd/migration.sql

```sh
CREATE TABLE room (
    id INT NOT NULL AUTO_INCREMENT,
    level INT NOT NULL,
    division VARCHAR(1) NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE student (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    lastname VARCHAR(255) NULL,
    gender VARCHAR(255) NULL,
    birthDate DATETIME NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    roomId INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_room` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NULL,
    createdAt DATETIME NULL,
    updatedAt DATETIME NULL,
    PRIMARY KEY (`id`)
);
```

### Configuring development properties

Environment variables are in files config/custom.js y config/datastores.js.

In these files you can configure:
* Jwt secret
* Conexión MySQL

###### URI_MYSQL

Within the config/datastores.js file you should place the connection in string format to your mysql database. create file in this path with the following format



```ssh

module.exports.datastores = {

  default: {
    adapter: 'sails-mysql',
    url: 'mysql://user:password@host:port/database'
  },
};

```
add uri connection

url: 'mysql://user:password@host:port/database'


###### JWT_SECRET
Inside the config/custom.js file you should place the JWT secret key.  create file in this path with the following format

```ssh

module.exports.custom = {
  JWT_SECRET: 'MY_SECRET',
};
```
add key

JWT_SECRET: 'MY_SECRET',


### Configuring production properties

Within the config/env/production.js file, you must place the necessary properties to deploy the application.

Currently the application is deployed in [Render](https://render.com/) and the database in [Clever CLoud](https://www.clever-cloud.com/)

### Notes

#### Roles

The available roles are admin and user.
The admin role will allow you to create, edit and delete records. the user role will only allow you to find records

#### Protected routes

To access the routes you must send the authentication token in the headers.

{ authentication: 'Bearer ${token}' }

#### Config

To configure the project you can follow this guide https://sailsjs.com/documentation/reference/configuration/sails-config
