import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastname",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
