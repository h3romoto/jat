import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    // password will not be returned in Document from db query
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 50,
    default: "lastName",
  },
  location: {
    type: String,
    trim: true,
    maxlength: 50,
    default: "my city",
  },
});

// middleware
UserSchema.pre("save", async function () {
  console.log(this.modifiedPaths())
  // only hash password if req actually changes it
  if (!this.isModified('password')) {
    return
  }
  // .pre hook is NOT triggered by some methods, e.g findOneAndUpdate
  const salt = await bcrypt.genSalt(10);
  // "this" points to User model instance (document) from request
  this.password = await bcrypt.hash(this.password, salt);
  
});

// custom instance methods
UserSchema.methods.createJWT = function () {
  // create jwt token based on user id
  return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}

export default mongoose.model("User", UserSchema);
