import joi from "joi";
import { ISignUpData } from '../types/authTypes';

const signUpSchema = joi.object<ISignUpData>({
    name: joi.string().max(20).required().messages({
        "any.required": "You must give a name!",
        "string.name": "Your name must have no more than 20 characters!"
    }), 
    email: joi.string().email().required().messages({
        "any.required": "You must give an e-mail!",
        "string.email": "You must inform a valid e-mail!"
    }),
    password: joi.string().min(10).required().messages({
        "any.required": "You must inform a password!",
        "string.min": "Your password must be at least 10 characters long!"
    })
});

export default signUpSchema;