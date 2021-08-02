import express from 'express'
import MasterRouter from './app/routes/MasterRoute'

export class Server {
    public app = express()
    public router = MasterRouter
}