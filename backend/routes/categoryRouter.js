import express from "express";
import {
  categoryRegister,
  getAllCategory,
  getSingleCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/register", categoryRegister);
router.get("/getall", getAllCategory);
router.get("/single", getSingleCategory);

export default router;
