import { IUser } from "../Interfaces";

export class User {
    private _user: IUser
    private _data: IUser[]

    constructor(user: IUser) {
        this._user = user
    }

    getAll() {
        return this._user
    }

    add(user: IUser) {
        this._data.push(user)
    }

}