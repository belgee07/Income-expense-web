import cors from "cors";
import env from "dotenv";
import express from "express";

env.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, console.log(`http://localhost:${port}`));
