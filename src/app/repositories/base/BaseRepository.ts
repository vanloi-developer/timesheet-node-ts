import { IWrite } from "../interfaces/IWrite.interface";
import { IRead } from "../interfaces/IREAD.interface";
import { Document, Model } from "mongoose";

// that class only can be extended
class BaseRepository<T extends Document> implements IWrite<T>, IRead<T> {
    private _model: Model<Document>

    constructor(modelSchema: Model<Document>) {
        this._model = modelSchema
    }

    retrieve(callback: (error: any, result: Document[]) => void): void {
        this._model.find({}, callback)
    }

    findById(id: string, callback: (error: any, result: Document) => void): void {
        this._model.findById(id, callback)
    }

    create(item: Document, callback: (error: any, result: Document) => void): void {
        item.save(callback)
    }

    update(_id: string, item: Document, callback: (error: any, result: Document) => void): void {
        this._model.findByIdAndUpdate(_id, item, callback)
    }

    delete(_id: string, callback: (error: any, result: Document)=> void): void {
        this._model.findByIdAndDelete(_id, callback)
    }
}

Object.seal(BaseRepository)
export = BaseRepository
