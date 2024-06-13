import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Product } from "../models/productSchema.js";
import ErrorHandler from "../middleware/error.js";

// _____________________________Product Registeration______________________________________
export const productRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    productName,
    productModel,
    isAvailable,
    productCategory,
    productSubCategory,
    productDescription,
    productPhoto,
    brandName,
    brandLogo,
    productPrice,
    vendorId,
    vendorName,
  } = req.body;
  if (
    !productName ||
    !productModel ||
    !isAvailable ||
    !productCategory ||
    !productSubCategory ||
    !productDescription ||
    !productPhoto ||
    !brandName ||
    !brandLogo ||
    !productPrice ||
    !vendorId ||
    !vendorName
  ) {
    return next(new ErrorHandler("Please send complete details!", 400));
  }

  const isRegistered = await Product.findOne({ productModel });
  if (isRegistered) {
    return next(new ErrorHandler("Product already Registered!", 400));
  }
  const productId = productModel + Date.now().toString();
  const product = await Product.create({
    productName,
    productModel,
    isAvailable,
    productCategory,
    productSubCategory,
    productDescription,
    productPhoto,
    brandName,
    brandLogo,
    productPrice,
    vendorId,
    vendorName,
    productId,
  });
  res
    .status(200)

    .json({
      success: true,
      message: "Product Registered Successfully",
      product,
    });
});
// _______________________________________getAllProducts______________________________________________________

export const getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});
// _______________________________________getSingleProduct______________________________________________________

export const getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;
  const product = await Product.findOne({ productId });
  res.status(200).json({
    success: true,
    product,
  });
});
// _______________________________________get All Products on the basis of category______________________________________________________

export const categoryProducts = catchAsyncErrors(async (req, res, next) => {
  const { productCategory } = req.body;
  const products = await Product.find({ productCategory });
  res.status(200).json({
    success: true,
    products,
  });
});

// _______________________________________get All Products on the basis of category and sub category______________________________________________________

export const subCategoryProducts = catchAsyncErrors(
  async (req, res, next) => {
    const { productCategory, productSubCategory } = req.body;
    const products = await Product.find({
      $and: [{ productCategory }, { productSubCategory }],
    });
    res.status(200).json({
      success: true,
      products,
    });
  }
);
