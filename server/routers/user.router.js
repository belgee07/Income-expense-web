import { Router } from "express";
import { loginController } from "../controllers/users/login.conroller.js";
import { signUpController } from "../controllers/users/sign-up.controller.js";

const userRouter = Router();

userRouter.route("/user/login").post(loginController);
userRouter.route("/user/signup").post(signUpController);

export default userRouter;
