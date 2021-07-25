import { Document } from "mongoose"
export interface IUser extends Document {
    userNameOrEmailAddress: String,
    password: String,
    rememberClient: Boolean
}