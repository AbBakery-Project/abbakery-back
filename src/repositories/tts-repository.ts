import { prisma } from "@/config";
import { CreateFileParams } from "@/services/tts-service";

async function createNewFileRegister(data:CreateFileParams) {
    return await prisma.file.create({
        data
    })
}

const ttsRepository = {
    createNewFileRegister
};

export default ttsRepository;