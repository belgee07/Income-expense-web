import { readFileSync } from "fs";
import { DbPath } from "../../utils/constants.js";

export const getUserId = (req, res) => {
  const { email } = res.locals;
  const resultJson = readFileSync(DbPath, "utf-8");
  const result = JSON.parse(resultJson);

  const data = result.users.find((el) => el.email === email);
  console.log(data);

  res.send(data.email);
};
