import { User } from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"

const Login = asyncHandler(async (req, res) => {
  //get user data from req
  const {email , password} = req.body
  //check if the user data is valid
  if(!email || !password){
    res.status(401).json({
        "messgae" : "Please fill the required fields"
    })
  }
  //user exist in database
  const user = await User.findOne({email})
  if(!user){
    res.status(401).json({
        "message" : "User not found!!!"
    })
  }
  //check the password
  const isValid = await bcrypt.compare(password,user.password)
  if(!isValid){
    res.status(402).json({
        "message" : "Incorrect Password !!!"
    })
  }
  //return the user
  res.status(200).json({
    "message" : "Login Success!!!",
    "data" : user
  })
  // console.log("login Success!!!");
});

const Signup = asyncHandler(async (req, res) => {
  // Get user data from req
  const {
    name,
    email,
    password,
    fatherName,
    address,
    phone,
    alternatePhone,
    aadhar,
    pan,
    image,
  } = req.body;

  // Check if all required fields are provided
  if (
    !name ||
    !email ||
    !password ||
    !fatherName ||
    !address ||
    !phone ||
    !aadhar ||
    !pan
  ) {
    return res.status(401).send({
      message: "Please fill all the required fields",
    });
  }

  // Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { pan }, { aadhar }],
  });
  if (existingUser) {
    return res.status(401).json({
      message: "User already exists!!!",
    });
  }

  // Create a new user instance
  const newUser = new User({
    name,
    email,
    password,
    fatherName,
    address,
    phone,
    alternatePhone,
    aadhar,
    pan,
  });

  // Save the user to the database
  const savedUser = await newUser.save();
  if (savedUser) {
    // Send response
    return res.status(200).json({
      message: "User saved successfully",
      data: savedUser,
    });
  } else {
    return res.status(500).json({
      message: "Failed to save user",
    });
  }
});

export { Login, Signup };
