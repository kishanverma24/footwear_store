import express from "express";
import {
  postComment,
  getAllComments,
  deleteSingleComment,
} from "../controller/commentController.js";

const router = express.Router();

router.post("/post", postComment);
router.get("/getall", getAllComments);
router.delete("/delete", deleteSingleComment);

export default router;
