import { User } from "@prisma/client";


export type ISignUpData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export interface ITokenInterface {
    user: {
       userId: number;
    };
}

export type ISignInData = Omit<User, 'id' | 'name'| 'createdAt' | 'updatedAt'>

export interface ITokenInterface {
    user: {
       userId: number;
    };
}