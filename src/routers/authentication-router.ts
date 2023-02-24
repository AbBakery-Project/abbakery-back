import { Router } from "express";
import signInSchema from "../schemas/authentification-schema";
import { schemaValidator } from "../middlewares/schemaValidator";
import * as authController from "@/controllers";

const authRouter = Router();

authRouter.post("/", schemaValidator(signInSchema), authController.signIn)

export { authRouter };