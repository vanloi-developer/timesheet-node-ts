import BaseService from "../../../Services/base";

export class BaseController<T> {
    protected _service: BaseService<T>
}