import configs from './configs/app'
import { Server } from './server'
import { mongooseConnection } from './database'


export class Application {
    server: Server

    init() {
        this.initServer()
    }

    initServer() {
        this.server = new Server()
    }

    async accessDatabase() {
        return await mongooseConnection.createConnection()
    }

    start() {
        ((port = configs.APP_PORT || 5003) => {
            this.server.app.listen(port, () => {
                console.log(`Server is running at: http://loclahost:${port}`)
            })
            this.server.app.use('/api', this.server.router)
        })()
    }
}