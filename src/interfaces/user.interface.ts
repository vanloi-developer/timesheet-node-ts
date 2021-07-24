import { Document } from "mongoose"

export default interface IUser extends Document {
    userNameOrEmailAddress: String,
    password: String,
    rememberClient: Boolean
}