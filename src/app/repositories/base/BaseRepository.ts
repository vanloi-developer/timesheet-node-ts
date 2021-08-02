//import all interfaces

import { IWrite } from "../interfaces/IWrite.interface";
import { IRead } from "../interfaces/IREAD.interface";
import { Collection} from "mongoose";

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _model: Collection

    constructor(model: Collection){
        this._model = model
    }

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}