import express from 'express'
import { createAProduct, deleteProductByID, getProducts, getProductsByID, updateProductByID } from './product.controller';

const route = express.Router()


route.post("/", createAProduct);
route.get("/", getProducts);
route.get("/:productId", getProductsByID);
route.put("/:productId", updateProductByID);
route.delete("/:productId", deleteProductByID);

export const ProductRoute = route