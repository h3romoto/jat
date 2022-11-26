import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication is invalid")
  }

  const token =  authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // authenticated userId
    req.user = { userId: payload.userId}

    // pass userId to the controller
    next()

    // return important else will get error: "Cannot set headers after they are sent to the client"
    return
  } catch (error) {
    throw new UnAuthenticatedError("Authentication is invalid")
  }
  next();
};

export default auth;
