import { sql } from "../../database/index.js";

export const getBalance = async (req, res) => {
  try {
    const { userId } = res.locals;

    const [result] = await sql`
      SELECT balance FROM users 
      WHERE userid = ${userId}
    `;

    console.log(result);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ balance: result.balance });
  } catch (error) {
    console.error("Error fetching balance:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
