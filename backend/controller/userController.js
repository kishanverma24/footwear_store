import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middleware/error.js";
import { generateToken } from "../middleware/jwtToken.js";

// _____________________________User Registeration______________________________________
export const userRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    userEmail,
    userContactNo,
    userName,
    userAddress,
    gender,
    userPassword,
  } = req.body;
  if (
    !userEmail ||
    !userContactNo ||
    !userName ||
    !userAddress ||
    !gender ||
    !userPassword
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ userContactNo });
  if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }
  const userId = userContactNo.toString() + Date.now().toString();
  const user = await User.create({
    userEmail,
    userContactNo,
    userName,
    userAddress,
    gender,
    userPassword,
    userId,
  });
  generateToken(user, "User Registered!", 200, res);
});
// _________________user - Login_______________________
export const userLogin = catchAsyncErrors(async (req, res, next) => {
  const { userContactNo, userPassword } = req.body;
  if (!userContactNo || !userPassword) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const user = await User.findOne({ userContactNo }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Contact no Or Password!", 400));
  }

  const isPasswordMatch = await user.comparePassword(userPassword);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Contact No Or Password!", 400));
  }
  generateToken(user, "Login Successfully!", 201, res);
});

// _______________________________________getAllUsers______________________________________________________

export const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});
// _______________________________________getSingleUser______________________________________________________

export const getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const {userId} = req.body;
  const user = await User.findOne({userId});
  res.status(200).json({
    success: true,
    user,
  });
});

// _____________________________________________UserLogout_______________________________________________

export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("userToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logged Out Successfully.",
    });
});
