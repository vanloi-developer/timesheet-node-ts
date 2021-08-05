import { IUser } from "../Interfaces";
import UserRepository from "../Repositories/UserRepository";
import BaseService from "./base";

class UserService extends BaseService<IUser> {

    protected _repos: UserRepository

    constructor() {
        super();
        this._repos = new UserRepository()
    }

    retrieve(callback: (error: any, result: IUser[]) => void): void {
        this._repos.retrieve(callback)
    }

    findById(id: string, callback: (error: any, result: IUser) => void): void {
        this._repos.findById(id, callback)
    }

    create(item: IUser, callback: (error: any, result: IUser) => void): void {
        this._repos.create(item, callback)
    }

    update(id: string, item: IUser, callback: (error: any, result: IUser) => void): void {
        this._repos.update(id, item, callback)
    }

    delete(id: string, callback: (error: any, result: IUser) => void): void {
        this._repos.delete(id, callback)
    }
}

Object.seal(UserService)
export = UserService