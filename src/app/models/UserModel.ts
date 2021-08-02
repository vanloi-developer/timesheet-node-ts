import { Schema, model } from "mongoose"
import { IUser } from "../interfaces/User"

const schema = new Schema<IUser>({

    userName: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
    }

})
export const UserModel = model<IUser>('users', schema)