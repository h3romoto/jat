import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

// custom error class, extended to include status code(s)
class customAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

class NotFoundError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }  
}

class BadRequestError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }  
}

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  
  // check for missing field(s)
  if (!name || !email || !password) {
    // this error is passed on to the middleware
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
  res.send("user login");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
