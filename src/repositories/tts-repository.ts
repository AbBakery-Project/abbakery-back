import { prisma } from "@/config";
import { File } from "@prisma/client";

async function createNewFileRegister(data:CreateFileParams) {
    return prisma.file.create({
        data
    })
}

export type CreateFileParams = Pick<File, "userId" | "name" | "voice" | "path" >;

const ttsRepository = {
    createNewFileRegister
};

export default ttsRepository;