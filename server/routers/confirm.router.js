import { Router } from "express";
import { authMidlleware } from "../middlewares/auth.js";
import { confirmCurrency } from "../controllers/confirm/confirm.js";

const confirmRouter = Router();

confirmRouter.post("/user/confirm", authMidlleware, confirmCurrency);

export default confirmRouter;
