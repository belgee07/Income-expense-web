import { readFileSync, writeFileSync } from "fs";
import { DbPath } from "../../utils/constants.js";

export const Balance = async (req, res) => {
  try {
    const { balance } = req.body;
    const { userId } = res.locals;
    console.log(balance, userId);

    const resultJson = readFileSync(DbPath, "utf-8");
    const result = JSON.parse(resultJson);

    const newResult = result.users.map((user) => {
      if (user.userId === userId) {
        return { ...user, balance };
      } else {
        return user;
      }
    });
    result.users = newResult;

    await writeFileSync(DbPath, JSON.stringify(result, null, 2));
    res.send("succes");
  } catch {
    res.status(500).send("as");
  }
};
