import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

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

  // exclude user password from from returned User Document
  res
    .status(StatusCodes.OK)
    .json({
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
  res.send("user login");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
