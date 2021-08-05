export interface IRead<T> {
    retrieve: (callback: (err: any, result: T[]) => void) => void
    findById: (id: string, callback: (err: any, result: T) => void) => void
}