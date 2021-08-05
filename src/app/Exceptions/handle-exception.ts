import { HttpException } from './http-exception'
import { Request, Response, NextFunction } from 'express'
/**
 * Required External Module
 */

class ExceptionHandling {
    public handleError = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
        try {
            const name: string = error.name || `Internal Server Error`
            const status: number = error.status || 500
            const message: string = error.message || `Sorry, something went wrong, please try again.`

        } catch (error) {
            next(error)
        }
    }
}