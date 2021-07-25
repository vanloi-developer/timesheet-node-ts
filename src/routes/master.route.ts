import { BaseRouter } from "./base.route";
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import UserRouter from './user.route'
import cors from 'cors'
const fakeDT = {
    "accessToken": "123",
    "encryptedAccessToken": "12345",
    "expireInSeconds": 100,
    "userId": 1
}
const fakeData = {
    result: {
        application: {
            version: "4.3.0.0",
            releaseDate: "2021-07-20T15:49:07.1350156+07:00",
            features: {},
        },
        user: null,
        tenant: null,
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
}

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
        this.router.use(cors('*'))
    }

    protected init() {
        this.router.get('/', (req: Request, res: Response) => {
            res.json(`Homepage controller`)
        })

        this.router.get('/services/app/Session/GetCurrentLoginInformations', (req: Request, res: Response) => {
            res.status(200).json(fakeData)
        })

        this.router.post('/TokenAuth/Authenticate', (req: Request, res: Response) => {
            res.status(200).json({
                success: true,
                bd: {
                    "accessToken": "string",
                    "encryptedAccessToken": "string",
                    "expireInSeconds": 0,
                    "userId": 0
                  }
            })
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