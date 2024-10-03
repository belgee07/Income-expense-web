import hash from "bcryptjs";
import { v4 as uuid } from "uuid";
import { sql } from "../../database/index.js";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const createdAt = new Date();
    const userId = uuid();
    const hashedPassword = await hash.hashSync(password);

    await sql`INSERT INTO users(userId, username, email, password, createdAt)
              VALUES (${userId},${username}, ${email}, ${hashedPassword}, ${createdAt})`;

    res.status(200).send("Signup success");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error.");
  }
};
