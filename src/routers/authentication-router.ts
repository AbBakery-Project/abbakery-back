import { Router } from "express";
import signInSchema from "../schemas/authentification-schema";
import { schemaValidator } from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/", schemaValidator(signInSchema), )

export { authRouter };