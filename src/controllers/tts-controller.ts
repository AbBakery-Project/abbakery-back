import { Request, Response } from "express";
import httpStatus from "http-status";
import * as ttsService from "../services/tts-service";

export async function newTTS(req: Request, res: Response) {
    const { text, audioName } = req.body;
    try {
        await ttsService.default.postTTS(text, audioName);
        // Fazer uma função q chama a postTTS e depois insere o regstro no db. Só então retorna o "CREATED".
        return res.status(httpStatus.CREATED);
        
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }

}