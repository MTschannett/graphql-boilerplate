import Book from './types/Book';

const RootQuery = `
    type RootQuery {
        getBook(id: Int!): Book
        allBooks: [Book]
    }
`

export default RootQuery;
