import { readFileSync, writeFileSync } from "fs";
import { DbPath } from "../../utils/constants.js";

export const confirmCurrency = async (req, res) => {
  try {
    const { currency } = req.body;
    const { userId } = res.locals;

    const resultJson = readFileSync(DbPath, "utf-8");
    const result = JSON.parse(resultJson);

    const newResult = result.users.map((user) => {
      if (user.userId === userId) {
        return { ...user, currency };
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
