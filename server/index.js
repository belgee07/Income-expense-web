import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";
import confirmRouter from "./routers/confirm.router.js";
import balanceRouter from "./routers/balance.router.js";

env.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", confirmRouter);
app.use("/api", balanceRouter);

app.listen(port, console.log(`http://localhost:${port}`));
