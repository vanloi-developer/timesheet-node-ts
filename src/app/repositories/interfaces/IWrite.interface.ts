import mongoose from "mongoose";

export interface IWrite<T> {
    create: (item: T, callback: (err: any, result: T) => void) => void
    update: (_id: string, item: T, callback: (err: any, result: T) => void) => void
    delete: (_id: string, callback: (err: any, result: T) => void) => void

}
