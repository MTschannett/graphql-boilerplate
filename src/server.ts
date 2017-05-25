import * as express from 'express';
import { graphqlExpress } from 'graphql-server-express';
import { graphiqlExpress } from 'graphql-server-express';
import * as bodyParser from 'body-parser';
import schema from './schema/Schema';
import * as chalk from 'chalk'

export default class Server {
    private app: express.Application;
    private _port: number;

    constructor() {
        this.app = express();

        this.applyRoutes;
    }

    applyRoutes(): void {
        this.app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

        this.app.use('/graphiql', graphiqlExpress({
          endpointURL: '/graphql',
        }))
    }

    run(): void {
        // TODO set this with env variables
        this.app.listen(this.port, this.notifyExpressStatus);
    }

    notifyExpressStatus(error: Error): any {
        if (error) {
          console.error(chalk.red('could not start server'))
          console.error(chalk.red(error.message))
        } else {
          console.log(chalk.blue(`Server started, http://localhost:${4000}/graphql`))
        }
    }

    private get port(): number {
        return parseInt(process.env.port);
    }
}
