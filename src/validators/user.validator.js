import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().min(4).required(),
    contact: Joi.string().regex(/^[0-9]{10}$/).required(),
    email: Joi.string().email({ tlds: { allow: ['com', 'net', 'in'] } }).required(),
    password: Joi.string().min(8).regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/).message('Invalid').required(),
    role: Joi.string()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: ['com', 'net', 'in'] } }).required(),
    password: Joi.string().min(8).regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/).message('Invalid').required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};