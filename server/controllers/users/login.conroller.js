import { readFileSyncincomen } from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = readFileSync(
    "/Users/24LP6422/Desktop/Full stack project/server/db/db.json",
    "utf-8"
  );
  const result = JSON.parse(resultJson);
  const tokenSecret = "qwerty";

  const emailFound = result.users.find((el) => el.email === email);

  if (!emailFound) {
    res.status(400).send("ali neg ni taarahgui bn");
    return;
  }

  const passwordMatch = await bcrypt.compare(password, emailFound.password);

  if (!passwordMatch) {
    res.status(400).send("ali neg ni taarahgui bn");
    return;
  }

  const token = jwt.sign({ email }, tokenSecret);
  console.log(token);

  res.status(200).send("login success");
};
