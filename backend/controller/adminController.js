import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Admin } from "../models/adminSchema.js";
import ErrorHandler from "../middleware/error.js";
import { generateToken } from "../middleware/jwtToken.js";


// _____________________________Admin Registeration______________________________________
export const registerAdmin = catchAsyncErrors(async (req, res, next) => {
  const {
    adminEmail,
    adminContactNo,
    adminName,
    adminAddress,
    gender,
    adminPassword,
  } = req.body;
  if (
    !adminEmail ||
    !adminContactNo ||
    !adminName ||
    !adminAddress ||
    !gender ||
    !adminPassword
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await Admin.findOne({ adminContactNo });
  if (isRegistered) {
    return next(new ErrorHandler("Admin already Registered!", 400));
  }
  const adminId = adminContactNo.toString() + Date.now().toString();
  const admin = await Admin.create({
    adminEmail,
    adminContactNo,
    adminName,
    adminAddress,
    gender,
    adminPassword,
    adminId,
  });
  generateToken(admin, "Admin Registered!", 200, res);
});
// _________________Admin Login_______________________
export const adminLogin = catchAsyncErrors(async (req, res, next) => {
  const { adminContactNo, adminPassword } = req.body;
  if (!adminContactNo || !adminPassword) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const admin = await Admin.findOne({ adminContactNo }).select("+password");
  if (!admin) {
    return next(new ErrorHandler("Invalid Contact no Or Password!", 400));
  }

  const isPasswordMatch = await admin.comparePassword(userPassword);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Contact No Or Password!", 400));
  }
  generateToken(admin, "Login Successfully!", 201, res);
});

// _______________________________________getAllAdmins______________________________________________________

export const getAllAdmins = catchAsyncErrors(async (req, res, next) => {
  const admins = await Admin.find();
  res.status(200).json({
    success: true,
    admins,
  });
});
// _______________________________________getSingleAdmin______________________________________________________

export const getSingleAdmin = catchAsyncErrors(async (req, res, next) => {
  const { adminId } = req.body;
  const admin = await Admin.findOne({ adminId });
  if (!admin) {
    res.status(200).json({
      success: false,
      message: "Admin not found",
    });
  }
  res.status(200).json({
    success: true,
    admin,
  });
});

// _____________________________________________Admin Logout_______________________________________________

export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("adminToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logged Out Successfully.",
    });
});
