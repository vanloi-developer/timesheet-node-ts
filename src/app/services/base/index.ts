import BaseRepository from "../../Repositories/base/BaseRepository"

class BaseService<T> {

    protected _repos: BaseRepository<T>

}

Object.seal(BaseService)
export = BaseService