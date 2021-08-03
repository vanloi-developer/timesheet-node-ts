import dotenv from 'dotenv'
dotenv.config({
    path: ".env"
})

export default {
    NODE_ENV: process.env.NODE_ENV,
    APP_NAME: process.env.APP_NAME,
    APP_PORT: process.env.APP_PORT
}