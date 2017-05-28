const Author = `
    type Author {
        id: Int!
        name: String
        biography: String
        books: [Book]
    }
`

export const AuthorInput = `
    input AuthorInput {
        name: String
        biography: String
        books: [BookInput]
    }
`

export default Author;
