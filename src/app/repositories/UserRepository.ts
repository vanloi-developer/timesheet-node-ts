import BaseRepository from "./base/BaseRepository";
import { IUser } from "../Interfaces";
import { userModelSchema as schemaModel } from '../Models/UserModel'

class UserRepository extends BaseRepository<IUser> {
    constructor() {
        super(schemaModel)
    }
}

Object.seal(UserRepository)
export = UserRepository
