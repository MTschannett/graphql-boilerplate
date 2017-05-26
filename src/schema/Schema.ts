import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import {makeExecutableSchema} from 'graphql-tools';
import Types from './types/index';
import resolver from './resolvers/BookResolver'

const Schema = `
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

export default makeExecutableSchema({
    typeDefs:[Schema, RootMutation, RootQuery, Types],
    resolvers: resolver,
})
