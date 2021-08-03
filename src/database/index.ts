import { connect } from 'mongoose'

import { BaseMongooseConnection } from './base'
import config, { IMongooseOption } from '../config/database'

export class MongooseConnection extends BaseMongooseConnection {

    protected static _options: IMongooseOption = config.options
    protected static _uri: string = config.DB_URI

    constructor() {
        super()
    }

    public static async makeConnection(): Promise<void> {
        try {
            await connect(this._uri, this._options)
            console.log(`Successfully connected to the database`)
        }
        catch (error) {
            console.log(`Failed to connecting to the database, error: ${error}`)
        }
    }
}
