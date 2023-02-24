import { Request, Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import * as ttsService from "../services/tts-service";

export async function newTTS(req: AuthenticatedRequest, res: Response) {
    const { userId } = req; 
    const { text, audioName } = req.body;
    try {
        await ttsService.default.newAudioFile(userId, text, audioName);
        return res.status(httpStatus.CREATED);
        
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }

}