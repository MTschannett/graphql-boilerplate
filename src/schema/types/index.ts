import Book, {BookInput} from './Book';
import Author, {AuthorInput} from './Author'
import User from './User'

// Gather all types here and export them to have them ready for the schema to overgive them.
// Use a function to mimic IDevType interface.
 const Types = () => [Book, Author, BookInput, AuthorInput, User]

export default Types;
