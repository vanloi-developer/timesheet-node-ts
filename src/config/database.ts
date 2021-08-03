/**
 * 
 * Enable strict mode
 * 
 */
 'use strict'

import dotenv from 'dotenv'
dotenv.config({ path: ".env" })

export interface IMongooseOption {
    [key: string]: boolean
}

const options: IMongooseOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    //useCreateIndex: true,
}

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME
const DB_URI = `${DB_HOST}:${DB_PORT}/${DB_NAME}`

export default {

    DB_HOST,

    DB_PORT,

    DB_NAME,

    DB_URI,

    options,

}
