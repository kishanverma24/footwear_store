import express from "express";
import {
  productRegister,
  getAllProducts,
  getSingleProduct,
  categoryProducts,
  subCategoryProducts,
} from "../controller/productController.js";

const router = express.Router();

router.post("/register", productRegister);
router.get("/getall", getAllProducts);
router.get("/single", getSingleProduct);
router.get("/category", categoryProducts);
router.get("/subcategory", subCategoryProducts);

export default router;
