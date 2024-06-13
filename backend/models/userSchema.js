import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
    userContactNo: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "null",
    },
    Cart: [],

    userOrders: [],

    userPassword: {
      type: String,
      required: [true, "Password is required"],
    },
  },

  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
