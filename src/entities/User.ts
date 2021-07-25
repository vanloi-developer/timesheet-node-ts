import {IUser} from "../interfaces/user.interface"

export class User<IUser>{
    private _userNameOrEmailAddress: string
    private _password : string
    protected _rememberClient: Boolean

    constructor({_userNameOrEmailAddress, _password, _rememberClient}) {
    }


}
