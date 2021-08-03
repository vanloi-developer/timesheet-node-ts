import { IMongooseOption } from "../../config/database"

export abstract class BaseMongooseConnection {

    protected static _uri: string

    protected static _options: IMongooseOption

    public static async makeConnection(): Promise<void> {}
}
