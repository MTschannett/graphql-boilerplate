import Book from './types/Book';

const RootMutation = `
    type RootMutation {
        createBook(name: String!, description: String, costs: Int): Book
    }
`

export default RootMutation;
