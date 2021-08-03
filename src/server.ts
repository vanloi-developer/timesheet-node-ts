import express from 'express'
import {ApiRouter} from './routes'

export class Server {
    public app = express()
    public router = ApiRouter
}