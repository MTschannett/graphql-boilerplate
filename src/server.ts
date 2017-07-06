import * as express from 'express';
import {Request, Response} from 'express';
import { graphqlExpress } from 'graphql-server-express';
import { graphiqlExpress } from 'graphql-server-express';
import * as bodyParser from 'body-parser';
import schema from './schema/Schema';
import * as chalk from 'chalk'
import * as jwt from 'jsonwebtoken'

/**
 * Server abstraction to handle startup and configuration.
 */
export default class Server {
    private app: express.Application;
    private _port: number;

    constructor() {
        this.app = express();

        this.applyRoutes();
    }

    /**
     * Applies routes to server.
     */
    applyRoutes(): void {
        this.app.use(
            '/graphql',
            bodyParser.json(),
            this.addUserCredentialsToRequest,
            graphqlExpress(request => ({ schema, context: request })));

        this.app.use('/graphiql', graphiqlExpress({
            endpointURL: '/graphql',
        }))
    }

    /**
     * Starts server.
     */
    run(): void {
        this.app.listen(this.port, this.notifyExpressStatus.bind(this));
    }

    /**
     * Hanlder for error callback of express when starting to listen.
     * @param  {Error} error Description of causing mistakes
     */
    notifyExpressStatus(error: Error): void {
        if (error) {
            console.error(chalk.red('could not start server'))
            console.error(chalk.red(error.message))
        } else {
          console.log(chalk.blue(`Server started, http://localhost:${this.port}/graphql`))
        }
    }

    /**
     * Finds authentication header and injects user information into request (is overgiven as context to graphql). When nothing is overgiven it adds nothing
     * @param  {Request}  req  Request
     * @param  {Response} res  Response
     * @param  {Function} next Next
     * @return {Request}        Request with maybe injected user credentials
     */
    addUserCredentialsToRequest(req: Request, res: Response, next: Function) {
        const token = req.get('Authorization');

        jwt.verify(token, process.env.secret, (err: any, decoded: any) => {
            if (err) {
                next()
            }

            req.user = decoded;

            next();
        })
    }

    /**
     * Returns used port of applicaiton.
     * @return {number} Portnumber
     */
    private get port(): number {
        return parseInt(process.env.port);
    }
}
