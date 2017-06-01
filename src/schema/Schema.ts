import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
import {makeExecutableSchema, addSchemaLevelResolveFunction} from 'graphql-tools';
import Types from './types/index';
import MainResolver from './resolvers/MainResolver'

const Schema = `
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`

// function authTestFunction(obj:any, args:any, context:any, info:any) {
//     console.log('in auth test')
//     console.log(obj, args, context, info)
// }

let SchemaType =  makeExecutableSchema({
    typeDefs:[Schema, RootMutation, RootQuery, Types],
    resolvers: MainResolver
});

 // addSchemaLevelResolveFunction(SchemaType, authTestFunction)

export default SchemaType;
