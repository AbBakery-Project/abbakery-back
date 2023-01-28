import { Router } from "express";
import signUpSchema from "@/schemas/users-schema";
import { schemaValidator } from "@/middlewares";
import { newUser } from "@/controllers";

const usersRouter = Router();

usersRouter.post("/", schemaValidator(signUpSchema), newUser)

export { usersRouter };
