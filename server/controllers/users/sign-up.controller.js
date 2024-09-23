import { readFile, writeFile } from "fs/promises";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { DbPath } from "../../utils/constants.js";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;
  const userId = uuid();

  try {
    const resultJson = await readFile(DbPath, "utf-8");
    const result = JSON.parse(resultJson);

    const userFound = result.users.find((el) => el.username === username);
    if (userFound) {
      return res.status(400).send("User already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    result.users.push({ userId, username, email, password: hashedPassword });

    await writeFile(DbPath, JSON.stringify(result));

    res.status(200).send("Signup success");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal server error.");
  }
};
