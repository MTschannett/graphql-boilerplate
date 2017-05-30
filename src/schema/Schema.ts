import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import {makeExecutableSchema} from 'graphql-tools';
import Types from './types/index';
import MainResolver from './resolvers/MainResolver'

const Schema = `
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

export default makeExecutableSchema({
    typeDefs:[Schema, RootMutation, RootQuery, Types],
    resolvers: MainResolver
})
