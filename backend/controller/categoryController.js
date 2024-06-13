import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Category } from "../models/categorySchema.js";
import ErrorHandler from "../middleware/error.js";

// _____________________________category Registeration______________________________________
export const categoryRegister = catchAsyncErrors(async (req, res, next) => {
  const { categoryName, categoryPhoto, categoryDescription } = req.body;
  if (!categoryName || !categoryPhoto || !categoryDescription) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await Category.findOne({ categoryName });
  if (isRegistered) {
    return next(new ErrorHandler("Category already Registered!", 400));
  }
  const categoryId = "category" + Date.now().toString();
  const category = await Category.create({
    categoryName,
    categoryPhoto,
    categoryDescription,
    categoryId,
  });
  res.status(200).json({
    success: true,
    message: "Category Registered!",
    category,
  });
});

// _______________________________________getAllCategories______________________________________________________

export const getAllCategory = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    categories,
  });
});

// _______________________________________getSingleCategory______________________________________________________

export const getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const { categoryName } = req.body;
  const category = await Category.findOne({ categoryName });
  res.status(200).json({
    success: true,
    category,
  });
});
