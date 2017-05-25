import {getConnectionManager, ConnectionManager, Connection, createConnection, Repository} from "typeorm";

export default class DatabaseService {
    private _connection: Connection;
    private _connectionManger: ConnectionManager;

    constructor() {
        this._connectionManger = getConnectionManager();
    }

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

      public async getRepository<T>(entityClassOrName: Function): Promise<Repository<T>> {
        return (await this.connection).getRepository<T>(entityClassOrName);
    }
}
