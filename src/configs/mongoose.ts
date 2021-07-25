import dotenv from 'dotenv'
dotenv.config({
    path: '../.env'
})
import { connect } from 'mongoose'



// const MONGO = {
//     host,
//     port,
//     uri,
//     options: MONGO_OPTIONS,

// }

export default async function run(): Promise<void> {
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 30000,
        keepAlive: true,
        autoIndex: false,
        retryWrites: false
    }
    
    const host = process.env.MONGO_HOSTNAME || 'localhost'
    const port = process.env.MONGO_PORT || 7007
    const uri = `mongodb://${host}:${port}/node-ts-internal`
    
    return  await connect(uri, options)
        .then(result => {
            console.log(`Successful connected to mongodb at: ${uri}`)
        })
        .catch(err => {
            console.log(`Error when connect mongodb: ${err}`)
        })
}