import { Request, Response } from "express";
import * as userService from "../services/users-service";
import httpStatus from "http-status";

export async function newUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
        const user = await userService.createUser(name, email, password);
        return res.status(httpStatus.CREATED);
    } catch (error) {
        if (error.name === "DuplicatedEmailError") {
            return res.status(httpStatus.CONFLICT).send(error);
          }
          return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}