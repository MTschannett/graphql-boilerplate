import {getConnectionManager, ConnectionManager, Connection, createConnection, Repository} from "typeorm";

/**
 * Singleton Service to handle database connections.
 */
export default class DatabaseService {
    private static _instance: DatabaseService;
    private _connection: Connection;
    private _connectionManger: ConnectionManager;

    /**
     * Creates private instance. Cannot be called from outside
     * @return {DatabaseService}
     */
    private constructor() {
        this._connectionManger = getConnectionManager();
    }

    /**
     * Retruns instance of databaseService to give access to database.
     * @return {DatabaseService}
     */
    public static get instance(): DatabaseService {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new DatabaseService();

        return this._instance;
    }

    /**
     * Returns connection to database.
     * @return {Promise<Connection>} Connection promise to database.
     */
    private get connection(): Promise<Connection> {
        if (this._connection) {
            return Promise.resolve(this._connection);
        }

        return createConnection()
            .then(connection => {
                this._connection = connection;

                return connection;
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
    }

    /**
     * Returns appropriate repository for overgiven entity class.
     * @param  {Object} Database entity.
     * @return {Promise<Repository>} Promise with overgives a repository to handle interaction with db.
     */
    public async getRepository<T>(entityClassOrName: Function): Promise<Repository<T>> {
        return (await this.connection).getRepository<T>(entityClassOrName);
    }
}
