const Book = `
    type Book {
        id: Int!
        title: String
        description: String
        costs: Int
        author: Author
    }
`

export const BookInput = `
    input BookInput {
        title: String
        description: String
        costs: Int
        author: AuthorInput
    }
`

export default Book;
