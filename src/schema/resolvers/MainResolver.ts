import DatabaseService from '../../database/database-service';
import Book from '../../entities/Book';
import Author from '../../entities/Author';
import User from '../../entities/User';
import {signUp, login} from '../../auth/authentication-service';

const databaseService = DatabaseService.instance;

const MainResolver = {
    RootQuery: {
        async getBook(root: any, args: any) {
            const repo = await databaseService.getRepository<Book>(Book);
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
        },
        async register(root: any, args: any, context: Object) {
            console.log(args)
            return signUp(args.email, args.password, context);
        },
        async login(root: any, args: any, context: Object) {
            return login(args.email, args.password, context);
        }
    },
    User: {
        password(user: User): string {
            return user.password;
        }
    }
}

export default MainResolver;
