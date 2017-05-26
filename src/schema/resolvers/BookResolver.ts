import DatabaseService from '../../database/database-service';
import Book from '../../entities/Book';

const databaseService = DatabaseService.instance;

const resolver = {
    RootQuery: {
        async getBook(root: any, args: any) {
            const repo = await databaseService.getRepository(Book);
            return repo.findOneById(args.id);
        },
        async allBooks(root: any, args: Object) {
            const repo = await databaseService.getRepository(Book);
            return repo.find()
        }
    }
}

export default resolver;
