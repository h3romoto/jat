import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  // check for missing field(s)
  if (!name || !email || !password) {
    // this error is passed on to the middleware
    throw new BadRequestError("Please provide all values");
  }

  // check for existing email
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError(
      "Email already in use. Please, use a different email."
    );
  }

  const user = await User.create({ name, email, password });

  // create jwt token
  const token = user.createJWT();

  // EXCLUDE PASSWORD from from returned User Document
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  // since password select is false in model, set it back to true for login
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid credentials");
  }
  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid credentials");
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token: token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
