import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Order } from "../models/orderSchema.js";
import ErrorHandler from "../middleware/error.js";

// _____________________________Order Placement ____________________________________________________________________________________________
export const orderPlacement = catchAsyncErrors(async (req, res, next) => {
  const { items, totalPrice, userId, orderAddress } = req.body;
  if ((!items, !totalPrice, !userId, !orderAddress)) {
    return next(new ErrorHandler("Please send full details!", 400));
  }

  const orderId = "order" + userId + Date.now().toString();
  const order = await Order.create({
    items,
    totalPrice,
    userId,
    orderAddress,
    orderId,
  });

  res.status(200).json({
    success: true,
    message: "Order Placed Successfully!",
    order,
  });
});

// _______________________________________getAllOrders___________________________________________________________________________________________

export const getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({
    success: true,
    orders,
  });
});

// _______________________________________getSingleOrderDetails_____________________________________________________________________________________

export const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const { orderId } = req.body;
  const order = await Order.findOne({ orderId });
  res.status(200).json({
    success: true,
    order,
  });
});
// ______________________________Get User all Orders________________________________________________________________________________________________
export const getAllUserOrders = catchAsyncErrors(async (req, res, next) => {
  const { userId } = req.body;
  const orders = await Order.find({ userId });
  res.status(200).json({
    success: true,
    orders,
  });
});

// ______________________________updateOrderStatus_____________________
// export const updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
//   const { orderId,orderStatus } = req.body;
//   const order = await Order.findOneAndUpdate({ orderId,orderStatus});
//   res.status(200).json({
//     success: true,
//     message:"Order status updated successfully",
//     order,
//   });
// });
