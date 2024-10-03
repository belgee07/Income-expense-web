import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";

env.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

app.listen(port, console.log(`http://localhost:${port}`));
