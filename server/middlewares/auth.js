import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMidlleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: "Token bhgui" });
  }
  const jwtToken = token.split(" ")[1];

  if (!jwtToken) {
    return res.status(401).send({ message: "Token bhgui" });
  }

  jwt.verify(jwtToken, process.env.SECRET, (err, suc) => {
    if (err) {
      res.status(401).send({ message: err.message });
      console.log(err.message);

      return;
    } else {
      res.locals.userId = suc.userId;
      next();
      return;
    }
  });
};
