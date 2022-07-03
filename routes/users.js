const userRouter = require('express').Router();
const {
  getUsers, getUserById, updateProfile, updateAvatar, getInfoUser,
} = require('../controllers/users');
const { userProfileValidation, userAvatarValidation, userByIdValidation } = require('../middlewares/validation');

userRouter.get('/', getUsers);

userRouter.get('/me', getInfoUser);

userRouter.patch('/me', userProfileValidation, updateProfile);

userRouter.patch('/me/avatar', userAvatarValidation, updateAvatar);

userRouter.get('/:userId', userByIdValidation, getUserById);

module.exports = userRouter;
