import { BaseRouter } from "./base.route";
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import UserRouter from './user.route'

class MasterRouter extends BaseRouter {
    constructor() {
        super()
        this.configure()
        this.init()
    }

    private configure() {
        this.router.use(express.json())
        this.router.use(express.urlencoded({ extended: true }))
        this.router.use(morgan('dev'))
    }

    protected init() {
        this.router.get('/', (req: Request, res: Response) => {
            res.json(`Homepage controller`)
        })
        this.router.post('/TokenAuth/Authenticate', (req: Request, res: Response) => {
            res.json(`Login controller`)
        })
        this.router.use('/services/app/User/', UserRouter)
        this.router.use('/api/services/app/Customer', (req: Request, res: Response) => {
            res.json(`Customer controller`)
        })
        this.router.use('/services/app/Project', (req: Request, res: Response) => {
            res.json(`Project controller`)
        })
        this.router.use('/services/app/Task', (req: Request, res: Response) => {
            res.json(`Task controller`)
        })
        this.router.use('/timesheet', (req: Request, res: Response) => {
            res.json(`Timesheet controller`)
        })

    }
}

export = new MasterRouter().router