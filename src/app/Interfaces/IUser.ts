import { Document } from "mongoose"

export interface IUser extends Document {
    userName: string,
    name: string,
    surname: string,
    emailAddress: string,
}

/**
 * 
 *  phoneNumber: string,
    address: string,
    isActive: Boolean,
    roleNames: [],
    password: string,
    type: number,
    jobTitle: string,
    level: number,
    registerWorkDay: string,
    allowedLeaveDay: boolean,
    startDateAt: string,
    salary: number,
    salaryAt: string,
    userCode: string,
    managerId: number,
    branch: number,
    sex: number,
    morningWorking: string,
    morningStartAt: string,
    afternoonWorking: string,
    afternoonEndAt: string,
    afternoonStartAt: string,
    isWorkingTimeDefault: boolean,
    isStopWork: boolean,
 */