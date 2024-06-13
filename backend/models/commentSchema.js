import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    commentId: {
      type: String,
      required: true,
    },
    commentContent: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model("Comment", commentSchema);
