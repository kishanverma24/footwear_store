import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Comment } from "../models/commentSchema.js";
import ErrorHandler from "../middleware/error.js";

// _____________________________post-comment______________________________________

export const postComment = catchAsyncErrors(async (req, res, next) => {
  const { commentContent, userId, productId } = req.body;
  if (!commentContent || !userId || !productId) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const hasAlreadyCommented = await Comment.findOne({
    $and: [{ productId }, { userId }],
  });
  if (hasAlreadyCommented) {
    return next(new ErrorHandler("User has already Commented", 400));
  }
  const commentId = "comment" + Date.now().toString();
  const comment = await Comment.create({ commentContent, userId, productId,commentId });

  generateToken(category, "Category Registered!", 200, res);
  res.status(200).json({
    success: true,
    message: "Comment Posted!",
    comment,
  });
});

// _______________________________________getAllComments______________________________________________________

export const getAllComments = catchAsyncErrors(async (req, res, next) => {
    const {productId} = req.body;
  const comments = await Comment.find({productId});
  res.status(200).json({
    success: true,
    comments,
  });
});

// _______________________________________deleteSingleComment______________________________________________________

export const deleteSingleComment = catchAsyncErrors(async (req, res, next) => {
  const {commentId}  = req.body;
  const comment = await Comment.findOneAndDelete({ commentId });
  res.status(200).json({
    success: true,
    message:"Comment deleted successfully!",
  });
});
