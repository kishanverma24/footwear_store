import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    items: [
      {
        prductId: { type: String },
        productPrice: { type: Number },
        productName: { type: String },
      },
    ],
    orderStatus: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
    },
    userId: {
      type: String,
    },
    orderId: {
      type: String,
      unique: true,
      require: true,
    },
    orderAddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
