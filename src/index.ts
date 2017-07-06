import Server from './Server';
import * as dotenv from 'dotenv';
import ConnectionService from './database/database-service';
import Book from './entities/Book'

/**
 * Encapsulates initialization of server and app.
 */
class App {
    private server: Server;

    constructor() {
        this.server = new Server();
    }

    /**
     * Bootstraps application and starts it.
     */
    bootstrap(): void {
        this.getConfig();
        this.server.run();
    }

    /**
     * Loads environment configs into app.
     */
    getConfig(): void {
        dotenv.config();
    }
}

const app = new App();

app.bootstrap();
