import { prisma } from "@/config";
import { Prisma, User } from "@prisma/client";
import { CreateUserParams } from "@/services";

async function findByEmail(email: string):Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}

async function create({name, email, password} : CreateUserParams) {
    return await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
}

const userRepository = {
    findByEmail,
    create
};

export default userRepository;