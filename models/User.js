import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'my city',
  },
})

// middleware
UserSchema.pre("save", async function() {
  // .pre hook is NOT triggered by some methods, e.g findOneAndUpdate
  const salt = await bcrypt.genSalt(10);
  // "this" points to User model instance (document) from request
  this.password = await bcrypt.hash(this.password, salt); 

})

// custom instance methods
UserSchema.methods.createJWT = function () {
  console.log(this);
}

export default mongoose.model("User", UserSchema);
