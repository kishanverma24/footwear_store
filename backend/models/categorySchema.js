import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    categoryPhoto: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
      required: true,
    },
    subCategoryName: [
      { subCategoryName: { type: String }, subCategoryPhoto: { type: String } },
    ],
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", categorySchema);
