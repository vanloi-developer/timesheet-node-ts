'use strict'

import dotenv from 'dotenv'
dotenv.config({
    path: ".env",
})

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    //useCreateIndex: true,
}

export default {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    options,
}