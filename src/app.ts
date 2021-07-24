import dotenv from 'dotenv'
dotenv.config({
    path: '.env'
})
import { Server } from './server'
import conn from './configs/mongoose'


export class Application {
    server: Server

    init() {
        this.initServer()
    }

    initServer() {
        this.server = new Server()
    }

    connectDb() {
        (() => {
            conn()
        })()
    }

    start() {
        ((port = process.env.PORT || 5003) => {
            this.server.app.listen(port, () => {
                console.log(`Server is running at: http://loclahost:${port}`)
            })
            this.server.app.use('/api', this.server.router)
        })()
    }
}