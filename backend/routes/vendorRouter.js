import express from "express";
import {
  vendorRegister,
  vendorLogin,
  getAllVendors,
  getSingleVendor,
  logoutVendor,
} from "../controller/vendorController.js";

const router = express.Router();

router.post("/register", vendorRegister);
router.post("/login", vendorLogin);
router.post("/logout", logoutVendor);
router.get("/getall", getAllVendors);
router.get("/single", getSingleVendor);

export default router;
