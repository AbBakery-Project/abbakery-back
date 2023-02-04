import userRepository from "@/repositories/users-repository";
import { duplicatedEmailError } from "../errors/errors";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

export async function createUser({name, email, password} : CreateUserParams) : Promise<User> {
    await isEmailUnique(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create({
      name, 
      email, 
      password: hashedPassword,
    });
}

async function isEmailUnique(email: string) {
    const userEmail = await userRepository.findByEmail(email);

    if(userEmail !== null) {
      throw duplicatedEmailError();
    }
}

export type CreateUserParams = Pick<User, "name" | "email" | "password">;