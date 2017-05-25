import Server from './Server';
import * as dotenv from 'dotenv';
import ConnectionService from './database/database-service';
import Book from './entities/Book'

class App {
    private server: Server;

    constructor() {
        this.server = new Server();
    }

    bootstrap() {
        this.getConfig();
        this.server.run();
    }

    getConfig() {
        dotenv.config();
    }
}

const app = new App();

app.bootstrap();
