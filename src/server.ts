import express from 'express'
import MasterRouter from './routes/master.route'

export class Server {
    public app = express()
    public router = MasterRouter
}