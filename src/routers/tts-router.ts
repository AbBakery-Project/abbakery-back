import { Router } from "express";
import ttsSchema from "@/schemas/users-schema";
import { schemaValidator } from "@/middlewares";
import { newTTS } from "@/controllers/tts-controller";


const ttsRouter = Router();

ttsRouter.post("/", newTTS)

export { ttsRouter };
//schemaValidator(ttsSchema),