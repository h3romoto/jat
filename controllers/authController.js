import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    // this error is passed on to the middleware
    throw new Error("Please provide all values");
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