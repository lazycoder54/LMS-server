import { NextFunction, Response } from "express";
import { catchAsyncError } from "../middleware/catchAsyncErrors";
import orderModel from "../models/OrderModel";
import courseModel from "../models/course.model";

// create new order
export const newOrder = catchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await orderModel.create(data);

    res.status(201).json({
      success: true,
      order,
    });
  });


/// Get all orders
export const getAllOrdersService = async (res: Response) => {
    const orders = await orderModel.find().sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      orders,
    });
  };
  
  