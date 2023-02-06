import joi from "joi";

const ttsSchema = joi.object({
    audioName: joi.string().required().messages({
        "any.required": "You must send a text!"
    }),
    text: joi.string().required().messages({
        "any.required": "You must send a text!"
    })
});

export default ttsSchema;