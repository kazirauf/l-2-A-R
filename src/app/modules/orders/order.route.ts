import express from "express";
import { orderProduct, getOrderEmail } from "./order.controller";


const route = express.Router();

route.post("/", orderProduct);
route.get("/", getOrderEmail);

export const OrderRoute = route;
