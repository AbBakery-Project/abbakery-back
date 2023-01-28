import { Router } from "express";
import signUpSchema from "../schemas/users-schema";
import { schemaValidator } from "../middlewares/schemaValidator";

const usersRouter = Router();

usersRouter.post("/", schemaValidator(signUpSchema), )

export { usersRouter };
