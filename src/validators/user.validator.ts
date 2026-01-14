import Joi from "joi"

const userValidator = Joi.object({
    login: Joi.string().min(4).max(8).required(),
    password: Joi.string().min(4).max(8).required()
})
export default userValidator;