import userRepository from "@/repositories/users-repository";
import { duplicatedEmailError } from "../errors/errors";
import bcrypt from "bcrypt";

export async function createUser(name: string, email: string, password: string) {
    await isEmailUnique(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create(name, email, hashedPassword);
}

async function isEmailUnique(email: string) {
    const userEmail = await userRepository.findByEmail(email);

    if(userEmail !== null) {
      throw duplicatedEmailError();
    }
}