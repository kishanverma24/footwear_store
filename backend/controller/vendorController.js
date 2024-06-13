import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Vendor } from "../models/vendorSchema.js";
import ErrorHandler from "../middleware/error.js";
import { generateToken } from "../middleware/jwtToken.js";

// _____________________________Vendor Registeration______________________________________
export const vendorRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    vendorEmail,
    vendorContactNo,
    vendorName,
    vendorAddress,
    gender,
    vendorPassword,
    brandName,
    brandlogo,
    vandorGSTNo,
  } = req.body;
  if (
    !vendorEmail ||
    !vendorContactNo ||
    !vendorName ||
    !vendorAddress ||
    !gender ||
    !vendorPassword ||
    !brandName ||
    !brandlogo ||
    !vandorGSTNo
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await Vendor.findOne({ vendorContactNo });
  if (isRegistered) {
    return next(new ErrorHandler("Vendor already Registered!", 400));
  }
  const vendorId = vendorContactNo.toString() + Date.now().toString();
  const vendor = await Vendor.create({
    vendorEmail,
    vendorContactNo,
    vendorName,
    vendorAddress,
    gender,
    vendorPassword,
    brandName,
    brandlogo,
    vandorGSTNo,
    vendorId,
  });
  generateToken(vendor, "Vendor Registered!", 200, res);
});

// _________________Vendor - Login_______________________
export const vendorLogin = catchAsyncErrors(async (req, res, next) => {
  const { vendorContactNo, vendorPassword } = req.body;
  if (!vendorContactNo || !vendorPassword) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const vendor = await Vendor.findOne({ vendorContactNo }).select("+password");
  if (!vendor) {
    return next(new ErrorHandler("Invalid Contact no Or Password!", 400));
  }

  const isPasswordMatch = await vendor.comparePassword(vendorPassword);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Contact No Or Password!", 400));
  }
  generateToken(vendor, "Vendor Login Successfully!", 201, res);
});

// _______________________________________getAllVendors______________________________________________________

export const getAllVendors = catchAsyncErrors(async (req, res, next) => {
  const vendors = await Vendor.find();
  res.status(200).json({
    success: true,
    vendors,
  });
});
// _______________________________________getSingleVendor______________________________________________________

export const getSingleVendor = catchAsyncErrors(async (req, res, next) => {
  const { vendorId } = req.body;
  const vendor = await User.findOne({ vendorId });
  res.status(200).json({
    success: true,
    vendor,
  });
});

// _____________________________________________VendorLogout_______________________________________________

export const logoutVendor = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("VendorToken", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Vendor Logged Out Successfully.",
    });
});
