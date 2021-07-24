import { Schema, model} from "mongoose"
import IUser from "../interfaces/user.interface"


const schema = new Schema({
    userNameOrEmailAddress: {type: String, required: true},
    password: {type: String, required: true},
    rememberClient: {type: Boolean, default: true}
})

export default model<IUser>('users', schema)