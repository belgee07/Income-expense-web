import { readFileSync } from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { DbPath } from "../../utils/constants.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const resultJson = readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const foundUser = result.users.find((el) => el.email === email);
  if (!foundUser) {
    return res.status(400).send("Invalid email or password.");
  }

  const passwordMatch = await bcrypt.compare(password, foundUser.password);
  if (!passwordMatch) {
    return res.status(400).send("Invalid email or password.");
  }

  const tokenSecret = process.env.SECRET;

  if (!tokenSecret) {
    return res.status(500).send("Token secret is not defined.");
  }

  const token = jwt.sign({ userId: foundUser.userId }, tokenSecret, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};
