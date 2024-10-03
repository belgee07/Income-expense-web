import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";
import hash from "bcryptjs";

export const testController = async (req, res) => {
  //   const { username, email, password } = req.body;
  //   const createdAt = new Date();
  //   const userId = uuid();
  //   const hashedPassword = await hash.hashSync(password);

  //   await sql`INSERT INTO users(userId,username, email, password, createdAt)
  //         VALUES(${userId},${username},${email}, ${hashedPassword}, ${createdAt})`;

  //   const result = await sql`SELECT COUNT(DISTINCT email) FROM users`;
  //   const result = await sql`SELECT COUNT(*) AS DistinctEmail
  //                            FROM (SELECT DISTINCT email FROM users)`;
  //   const result = await sql`SELECT * FROM users
  //                            WHERE email='sdara'`;
  //   const result = await sql`SELECT * FROM users
  //                            WHERE email LIKE 's%'`;
  //   const result = await sql`UPDATE users
  //                            SET email='Juan'`;
  const result = await sql`DELETE FROM users`;
  console.log(result);

  res.send("success");
};
