const { celebrate, Joi } = require('celebrate');

const linkRegExp = /^https?:\/\/(w{3}\.)?[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}([a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+)*#*$/;

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.userCreatValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().allow('').min(2).max(30),
    about: Joi.string().allow('').min(2).max(30),
    avatar: Joi.string().pattern(linkRegExp),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.userProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

module.exports.userAvatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(linkRegExp),
  }),
});

module.exports.userByIdValidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required(),
  }),
});
