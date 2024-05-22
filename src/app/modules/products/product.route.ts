import express from 'express'
import { createAProduct, deleteProductByID, getProduct, getProductByID, updateProductByID } from './product.controller';

const route = express.Router()


route.post("/", createAProduct);
route.get("/", getProduct);
route.get("/:productId", getProductByID);
route.put("/:productId", updateProductByID);
route.delete("/:productId", deleteProductByID);

export const ProductRoute = route