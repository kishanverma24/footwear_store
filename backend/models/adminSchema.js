import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    adminId: {
      type: String,
      required: true,
      unique: true,
    },

    adminEmail: {
      type: String,
      required: true,
    },

    adminContactNo: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "null",
    },
    adminName: {
      type: String,
      required: true,
    },

    adminAddress: {
      type: String,
      required: true,
    },

    adminPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.model("Admin", adminSchema);
