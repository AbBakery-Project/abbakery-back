import { Router } from "express";
import ttsSchema from "@/schemas/users-schema";
import { schemaValidator } from "@/middlewares";
import { newTTS } from "@/controllers/tts-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";

const ttsRouter = Router();

ttsRouter.post("/", authenticateToken, newTTS)

export { ttsRouter };
//schemaValidator(ttsSchema),