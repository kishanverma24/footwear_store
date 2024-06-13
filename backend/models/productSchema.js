import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productId : {
      //product id
      type: String,
      require: true,
      unique: true,
    },
    productName : {
      // product name
      type: String,
      require: true,
    },
    productModel : {
      // product name
      type: String,
      require: true,
    },
    isAvailable : {
      // product availability
      type: Boolean,
      require: true,
    },
    productCategory : {
      // product category like shoe
      type: String,
      require: true,
    },
    productSubCategory : {
      // product sub category like sneakers
      type: String,
      require: true,
    },
    productDescription : {
      // product description
      type: String,
      require: true,
    },
    productPhoto : {
      // product photo
      type: String,
      require: true,
    },
    brandName : {
      //brand name
      type: String,
      require: true,
    },
    brandLogo : {
      //brand logo
      type: String,
      require: true,
    },
    // comments:{
    //   type:[{}]
    // },
    productPrice : {
      // product price
      type: Number,
      required: true,
    },
    vendorId : {
      //vendor id
      type: String,
      require: true,
    },
    vendorName : {
      //vendor name
      type: String,
      require: true,
    },
    likes : {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
