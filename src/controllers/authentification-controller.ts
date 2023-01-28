import { Request, Response } from "express";
import * as authService from "@/services/authentification-service";
import httpStatus from "http-status";

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const result = await authService.userAuthentification(email, password);
        return res.status(httpStatus.OK).send(result);
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send({});
    }
}