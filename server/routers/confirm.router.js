import { Router } from "express";
import { authMidlleware } from "../middlewares/auth.js";
import { confirmEmail } from "../controllers/confirm/confirm.js";

const confirmRouter = Router();

confirmRouter.post("/user/confirm", authMidlleware, confirmEmail);

export default confirmRouter;
