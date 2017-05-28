import Book, {BookInput} from './types/Book';
import Author from './types/Author';

const RootMutation = `
    type RootMutation {
        createBook(title: String!, description: String, costs: Int): Book
        createAuthor(name: String!, name: String, biography: String, books: [BookInput]): Author
    }
`

export default RootMutation;
