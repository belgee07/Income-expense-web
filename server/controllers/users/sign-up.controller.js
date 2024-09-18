import { readFileSync, writeFileSync } from "fs";
import bcrypt from "bcryptjs";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  const resultJson = await readFileSync(
    "/Users/24LP6422/Desktop/Full stack project/server/db/db.json",
    "utf-8"
  );
  const result = JSON.parse(resultJson);

  console.log(result);

  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);

  const userFound = result.users.find((el) => el.username === username);

  if (userFound) {
    res.send("iim nertei hereglegch ali hedin burtguulsen bn");
    return;
  }

  result.users.push({ username, email, password: hashedPassword });

  writeFileSync(
    "/Users/24LP6422/Desktop/Full stack project/server/db/db.json",
    JSON.stringify(result)
  );

  res.status(200).send("Signup success");
};
