import express from 'express'
import { createAProduct, deleteProductByID, getProducts, getProductid, updateProduct } from './product.controller';

const route = express.Router()


route.post("/", createAProduct);
route.get("/", getProducts);
route.get("/:productId", getProductid);
route.put("/:productId", updateProduct);
route.delete("/:productId", deleteProductByID);

export const ProductRoute = route