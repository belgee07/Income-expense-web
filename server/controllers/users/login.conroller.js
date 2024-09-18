import { readFileSync } from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);
  const tokenSecret = process.env.JWT_SECRET || "default_secret"; // Use environment variable

  const user = result.users.find((el) => el.email === email);

  if (!user) {
    return res.status(400).send("Invalid email or password.");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(400).send("Invalid email or password.");
  }

  const token = jwt.sign({ email }, tokenSecret, { expiresIn: "1h" }); // Added token expiration

  res.status(200).json({ token }); // Return JWT token
};
