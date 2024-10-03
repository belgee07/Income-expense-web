import { Router } from "express";
import { loginController } from "../controllers/users/login.conroller.js";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { confirmBalance } from "../controllers/users/balance.js";
import { confirmCurrency } from "../controllers/users/confirm.js";
import { authMidlleware } from "../middlewares/auth.js";
import { getBalance } from "../controllers/users/getBalance.js";
import { testController } from "../controllers/users/test.js";

const userRouter = Router();

userRouter.post("/user/login", loginController);
userRouter.post("/user/signup", signUpController);

userRouter.post("/user/confirm", authMidlleware, confirmCurrency);
userRouter.post("/user/balance", authMidlleware, confirmBalance);
userRouter.get("/user/balance", authMidlleware, getBalance);

// userRouter.post("/user/dbtest", testController);

export default userRouter;
