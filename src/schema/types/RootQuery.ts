import Book from './Book';

const RootQuery = `
    type RootQuery {
        book(id: Int!): Book
    }
`

// Gather all types here and export them to have them ready for the schema to overgive them.
export const Types = () => [Book]

export default RootQuery;
