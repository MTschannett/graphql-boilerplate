import RootQuery from './RootQuery';
import {Request} from 'express';
import RootMutation from './RootMutation';
import {makeExecutableSchema} from 'graphql-tools';
import Types from './types/index';
import MainResolver from './resolvers/MainResolver'
import * as jwt from 'jsonwebtoken';

const Schema = `
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

let SchemaType =  makeExecutableSchema({
    typeDefs:[Schema, RootMutation, RootQuery, Types],
    resolvers: MainResolver
});

export default SchemaType;
