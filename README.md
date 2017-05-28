# Graphql Boilerplate

This is a boilerplate for using Graphql with an orm and authentication.

## TODO

This boilerplate is in heavy development. More features will be added over time:

- [x] Basic Express functionality (Routes for graphql, graphiql)
- [x] Basic orm support (TypeOrm)
- [x] RootQuery plus example queries
- [x] Resolvers
- [x] Mutations
- [ ] Tests

## Usage

To use this boilerplate following steps have to be done:
- Clone this project
- Install dependecies `npm install` or `yarn`
- Create and configure app. [Configuration](#configuration)
- Start dev mode `npm run dev` or `yarn run dev`

## Dependencies

- ts-node (to run typescript code easy) `npm install -g ts-node`
- database (to store data) My suggestion for development is sqlite
- node (should I really mention this :D)

## Configuration

To configure a few aspects like the database or the port this boilerplate uses the .env file.
There is a .env.example file in the root folder of the project. Copy it or rename it to `.env` and add the right values.
Remember this file is meant to hold local configuration and will not be pushed to your repo.

## Database

To persist data a database is needed. For development I suggest sqlite3.
It is easy to use and install:

`npm install sqlite3` or `yarn add sqlite3`.

The database is installed as default database in this project. If you don't want to use it, uninstall and remove it.

### Example Config
This example config can be pasted straight into the .env file to test.
For more information about the configuring databases have a look at the [docs of typeorm](https://typeorm.github.io/connection.html#connection-environment-variables)
```
    TYPEORM_DRIVER_TYPE=sqlite
    TYPEORM_STORAGE=database.db
    TYPEORM_ENTITIES=src/entities/*.ts
    TYPEORM_AUTO_SCHEMA_SYNC=true
    TYPEORM_LOGGING_QUERIES=true
    TYPEORM_LOGGING_FAILED_QUERIES=true
```
