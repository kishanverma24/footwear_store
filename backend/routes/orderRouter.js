import express from "express";
import {
  orderPlacement,
  getAllOrders,
  getSingleOrder,
  getAllUserOrders,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/placement", orderPlacement);
router.get("/usersorders", getAllUserOrders);
router.get("/getall", getAllOrders);
router.get("/single", getSingleOrder);

export default router;
