import RootQuery from './RootQuery';
import {Request} from 'express';
import RootMutation from './RootMutation';
import {makeExecutableSchema, addSchemaLevelResolveFunction} from 'graphql-tools';
import Types from './types/index';
import MainResolver from './resolvers/MainResolver'
import * as jwt from 'jsonwebtoken';

const Schema = `
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

// TODO maybe add logic to set user object to context
function authTestFunction(obj:any, args:any, context:any, info:any) {
    console.log(context.user)
}

let SchemaType =  makeExecutableSchema({
    typeDefs:[Schema, RootMutation, RootQuery, Types],
    resolvers: MainResolver
});

 addSchemaLevelResolveFunction(SchemaType, authTestFunction)

export default SchemaType;
