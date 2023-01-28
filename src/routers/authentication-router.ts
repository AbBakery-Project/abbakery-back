import { Router } from "express";
import signInSchema from "../schemas/authentification-schema";
import { schemaValidator } from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/signin", schemaValidator(signInSchema), )

export { authRouter };