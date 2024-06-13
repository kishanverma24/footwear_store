import mongoose from "mongoose";

const { Schema } = mongoose;

const vendorSchema = new Schema(
  {
    vendorId: {
      type: String,
      required: true,
      unique: true,
    },

    vendorEmail: {
      type: String,
      required: true,
    },

    vendorContactNo: {
      type: Number,
      required: true,
    },

    vendorName: {
      type: String,
      required: true,
    },

    brandName: {
      type: String,
      required: true,
    },

    brandLogo: {
      type: String,
      required: true,
    },

    vendorAddress: {
      type: String,
      required: true,
    },

    vendorPassword: {
      type: String,
      required: true,
    },

    vandorGSTNo: {
      type: String,
      require: true,
    },

    productcreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Correctly reference the Product model
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Vendor = mongoose.model("Vendor", vendorSchema);
