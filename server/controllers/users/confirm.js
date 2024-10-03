import { sql } from "../../database/index.js";

export const confirmCurrency = async (req, res) => {
  try {
    const { currency } = req.body;
    const { userId } = res.locals;
    console.log(currency, userId);

    const result = await sql`
      UPDATE users 
      SET currency = ${currency} 
      WHERE userId = ${userId}
      RETURNING *;
    `;

    console.log(result);

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("Currency updated successfully");
  } catch (error) {
    console.error("Error updating balance:", error);
    res.status(500).send("Internal server error");
  }
};
