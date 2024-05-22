import express from "express";
import { orderProduct, getOrderByEmaill } from "./order.controller";


const route = express.Router();

route.post("/", orderProduct);
route.get("/", getOrderByEmaill);

export const OrderRoute = route;
