import Joi from '@hapi/joi';

export const newBookValidator = (req, res, next) => {
  const schema = Joi.object({
    bookName: Joi.string().min(4).required(),
    author: Joi.string().min(4).required(),
    description: Joi.string().min(2).required(),
    quantity: Joi.string().min(2).required(),
    price: Joi.string().min(1).required(),
    discountPrice: Joi.string().min(1)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};