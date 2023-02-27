import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import * as ttsService from "../services/tts-service";

export async function newTTS(req: AuthenticatedRequest, res: Response) {
    const { userId } = req; 
    const { text, audioName } = req.body;
    
    try {
        const tts = await ttsService.default.postTTS(userId, text, audioName);
        return res.send(tts).status(httpStatus.CREATED);
        
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }

}