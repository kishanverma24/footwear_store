import express from "express";
import {
  registerAdmin,
  adminLogin,
  getAllAdmins,
  getSingleAdmin,
  logoutAdmin,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", adminLogin);
router.post("/logout", logoutAdmin);
router.get("/getalladmins", getAllAdmins);
router.get("/single", getSingleAdmin);

export default router;
