import joi from "joi";
import { ISignInData } from '../types/authTypes';

const signInSchema = joi.object<ISignInData>({
    email: joi.string().email().required().messages({
        "any.required": "You must give an e-mail!"
    }),
    password: joi.string().min(10).required().messages({
        "any.required": "You must inform a password!"
    })
});

export default signInSchema;