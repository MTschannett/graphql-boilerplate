import Book, {BookInput} from './types/Book';
import Author from './types/Author';
import User from './types/User';

const RootMutation = `
    type RootMutation {
        createBook(title: String!, description: String, costs: Int): Book
        createAuthor(name: String!, name: String, biography: String, books: [BookInput]): Author
        register(email: String!, password: String!): User
        login(email: String!, password: String!): User
    }
`

export default RootMutation;
