import { sql } from "../../database/index.js";

export const confirmBalance = async (req, res) => {
  try {
    const { balance } = req.body;
    const { userId } = res.locals;
    console.log(balance, userId);

    const result = await sql`
      UPDATE users 
      SET balance = ${balance} 
      WHERE userId = ${userId}
      RETURNING *;
    `;

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("Balance updated successfully");
  } catch (error) {
    console.error("Error updating balance:", error);
    res.status(500).send("Internal server error");
  }
};
