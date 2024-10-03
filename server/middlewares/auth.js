import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMidlleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "Token bhgui" });
    }

    const jwtToken = token.split(" ")[1];
    if (!jwtToken) {
      return res.status(401).send({ message: "Token bhgui" });
    }

    jwt.verify(jwtToken, process.env.SECRET, (err, decoded) => {
      if (err) {
        throw new Error(err);
      } else {
        res.locals.userId = decoded.userId;
        next();
        return;
      }
    });
  } catch (error) {
    res.status(401).send({ message: "token duusjee" });
    return;
  }
};
