import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

// Before using express-async-errors package
// const register = async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json({ user });
//   } catch (error) {
//     next(error);
//   }
// };

// Using express-async-errors package to replace try/catch
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("please provide all values");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
