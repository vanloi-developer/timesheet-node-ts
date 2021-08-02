'use strict'
import { BaseRepository } from './base/BaseRepository'
import { Collection } from 'mongoose'
/**
 *  Generic type <T> mean <DTO>
 */
export class UserRepository<T> extends BaseRepository<T>{
    constructor(model: Collection) {
        super(model)
    }

    async create(item: T): Promise<boolean> {
        let c = false
        return c = true
    }

    async update(id: string, item: T): Promise<boolean> {
        return false
    }

    async delete(id: string): Promise<boolean> {
        return false
    }

    async find(item: T): Promise<T[]> {
        return []
    }

    async findOne(id: string): Promise<T> {
        return
    }
}