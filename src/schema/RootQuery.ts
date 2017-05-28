import Book from './types/Book';
import Author from './types/Author';

const RootQuery = `
    type RootQuery {
        getBook(id: Int!): Book
        allBooks: [Book]
        allAuthors: [Author]
    }
`

export default RootQuery;
