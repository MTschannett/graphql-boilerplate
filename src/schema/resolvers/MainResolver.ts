import DatabaseService from '../../database/database-service';
import Book from '../../entities/Book';
import Author from '../../entities/Author';

const databaseService = DatabaseService.instance;

const MainResolver = {
    RootQuery: {
        async getBook(root: any, args: any) {
            const repo = await databaseService.getRepository(Book);
            return repo.findOneById(args.id);
        },
        async allBooks(root: any, args: Object) {
            const repo = await databaseService.getRepository(Book);
            return repo.find()
        },
        async allAuthors(root: any, args: Object) {
            const repo = await databaseService.getRepository(Author);
            return repo.find();
        }
    },
    RootMutation: {
        async createBook(root:any, args: Object, context: Object) {
            const repo = await databaseService.getRepository(Book);
            const book = <Book>args;
            return repo.persist(book);
        },
        async createAuthor(root:any, args: Object, context: Object) {
            const repo = await databaseService.getRepository(Author);
            const author = <Author>args;
            return repo.persist(author);
        }
    }
}

export default MainResolver;
