import userRepository from "@/repositories/users-repository";
import { invalidCredentialsError } from "@/errors/errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function userAuthentification(email: string, password: string) {
    const user = await validateUser(email);

    await validatePassword(password, user.password);

    const userId = user.id;
    const token = jwt.sign( {userId}, process.env.JWT_SECRET);

    return token;
}

async function validateUser(email: string) {
    const user = await userRepository.findByEmail(email);
    if(!user) throw invalidCredentialsError();

    return user;
}

async function validatePassword(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
}

