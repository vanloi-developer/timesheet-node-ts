import { Response, Request, NextFunction } from 'express'
import { BaseRouter } from './base.route'

class UserRouter extends BaseRouter {
    constructor() {
        super()
        this.init()
    }

    protected init() {
        this.router.post('/Create', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: create user`)
        })

        this.router.post('/ChangeUserRole', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: change user role`)
        })

        this.router.put('/Update', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: update user`)
        })

        this.router.delete('/Delete', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: delete user`)
        })

        this.router.get('/GetRoles', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get roles`)
        })

        this.router.post('/ChangeLanguage', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: change language`)
        })

        this.router.post('/ChangePassword', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: change password`)
        })

        this.router.post('/ResetPassword', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: reset password`)
        })

        this.router.get('/GetUserNotPagging', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get user not pagging`)
        })

        this.router.post('/GetAllPagging', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: `)
        })

        this.router.post('/ImportUserFromFile', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: import user from file`)
        })

        this.router.get('/GetProjectManagerOfUser', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get project manager of user`)
        })

        this.router.post('/UpdateAvatar', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: update avatar`)
        })

        this.router.post('/UpdateYourOwnAvatar', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: update your own avatar`)
        })

        this.router.get('/GetAllManager', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get all manager`)
        })

        this.router.post('/DeactiveUser', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: deactive user`)
        })

        this.router.post('/ActiveUser', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: active user`)
        })

        this.router.post('/ImportWorkingTimeFromFile', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: import working time from file`)
        })

        this.router.get('/GetAllPM', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get all pm`)
        })

        this.router.get('/GetAllInternship', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get all internship`)
        })

        this.router.get('/Get', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get user`)
        })

        this.router.get('/GetAll', (req: Request, res: Response, next: NextFunction) => {
            res.json(`User controller: get all user`)
        })
    }
}

export = new UserRouter().router