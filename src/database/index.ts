import mongoose from 'mongoose'
import { IMongooseConnection } from './interface'
import config from '../configs/database'

const uri = `${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`
const options = config.options

class MongooseConnection implements IMongooseConnection {

    constructor(
        public _uri: string,
        public _options: any
    ) {
        this._uri = uri
        this._options = options
    }

    public async createConnection() {

        try {
            await mongoose.connect(this._uri, this._options)
            console.log(`Successfully connected to the database`)
        }
        catch (error) {
            console.log(`Failed to connecting to the database, error: ${error}`)
        }
    }
}
export const mongooseConnection = new MongooseConnection(uri, options)