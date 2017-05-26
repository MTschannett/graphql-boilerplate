import Book from './types/Book';

const RootMutation = `
    type RootMutation {
        createBook(title: String!, description: String, costs: Int): Book
    }
`

export default RootMutation;
