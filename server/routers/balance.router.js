import { Router } from "express";
import { authMidlleware } from "../middlewares/auth.js";
import { Balance } from "../controllers/cash/balance.js";

const balanceRouter = Router();

balanceRouter.post("/user/balance", authMidlleware, Balance);

export default balanceRouter;
