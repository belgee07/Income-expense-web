import { Router } from "express";
import { loginController } from "../controllers/users/login.conroller.js";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { authMidlleware } from "../middlewares/auth.js";
import { getUserId } from "../controllers/users/allUsers.js";

const userRouter = Router();

userRouter.post("/user/login", loginController);
userRouter.post("/user/signup", signUpController);

userRouter.post("/users", authMidlleware, getUserId);

userRouter.post("/confirm", authMidlleware, getUserId);

export default userRouter;
