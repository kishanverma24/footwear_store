import express from "express";
import {
  userRegister,
  userLogin,
  getAllUsers,
  getSingleUser,
  logoutUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", logoutUser);
router.get("/getalladmins", getAllUsers);
router.get("/single", getSingleUser);

export default router;
