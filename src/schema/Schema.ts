import RootQuery, {Types} from './types/RootQuery';
import {makeExecutableSchema} from 'graphql-tools';

const Schema = `
    schema {
        query: RootQuery
    }
`

export default makeExecutableSchema({
    typeDefs:[Schema, RootQuery, Types],
    resolvers: {},
})
