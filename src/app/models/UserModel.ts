import { Schema, model, Model } from "mongoose"
import { IUser } from "../Interfaces/IUser"

const schema = new Schema({

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

export const userModelSchema: Model<IUser> = model<IUser>('users', schema)