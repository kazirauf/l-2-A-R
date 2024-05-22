import { Request, Response } from "express";
import { OrderValidation } from "./order.validation";
import { OrderService } from "./order.service";

// orderProduct
export const orderProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const value = OrderValidation.parse(product);
    const result = await OrderService.createOrderIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: (err as Error).message,
    });
  }
};
// getOrderEmail

export const getOrderEmail = async (req: Request, res: Response) => {
  try {
    const {email} = req.query;
    const result = await OrderService.getOrderByEmailFromDB(email as string);

    res.status(200).send({
      success: true,
      message: "",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: (error as Error).message,});
  }
};

