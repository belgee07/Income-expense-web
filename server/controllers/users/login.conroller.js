import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sql } from "../../database/index.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [foundUser] = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (!foundUser) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const tokenSecret = process.env.SECRET;
    if (!tokenSecret) {
      return res.status(500).json({ error: "Token secret is not defined." });
    }

    const token = jwt.sign({ userId: foundUser.userid }, tokenSecret, {
      expiresIn: "1h",
    });

    // Send the response with the token
    res.status(200).json({ message: "Successfully logged in", token: token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
