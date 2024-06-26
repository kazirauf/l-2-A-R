import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";


// create products

export const createAProduct = async(req: Request, res: Response) => {
   try{
     const product = req.body;
     const value = ProductValidation.parse(product);
    const result = await ProductService.createAProductIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to create product!",
      error: err,
    });
   }
}


// get  products 
export const getProducts = async (req: Request, res: Response) => {
   try {
     const searchTerm = req.query?.searchTerm;

     const result = await ProductService.getProductsFromDB(searchTerm as string);
     res.status(200).send({
       success: true,
       message: "Product Searched successfully",
       data: result,
     });
   } catch (error) {
     res
       .status(500)
       .json({ success: false, message: "Product Searched failed" });
   }
}

// get product id

export const getProductid = async (req: Request, res: Response) => {
   try{
    const id = req.params.productId
    if(!id){
      res.status(400).json({
        success: false,
        message: "No ID is Provided!",
      });
    }
    const result = await ProductService.getProductidFromDB(id as string);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to fetch product!",
      error: err,
    });
   }
}

// update product by id


export const updateProduct = async (req: Request, res: Response) => {
   try{
    const id = req.params.productId;
    const product = req.body;
    if(!id){
      res.status(400).json({
        success: false,
        message: "NO ID is Provided!",
      });
    }
    if (!product) {
      res.status(400).json({
        success: false,
        message: "No data is Provided!",
      });
    }
    const value = ProductValidation.parse(product);
    await ProductService.updateProductFromDB(
      id as string,
      value
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to update product!",
      error: err,
    });
   }
}



// delete product 


export const deleteProduct = async (req: Request, res: Response) => {
   try{
    const id = req.params.productId;
    if(!id){
      res.status(400).json({
        success: false,
        message: "NO ID is Provided!",
      });
    }
    await ProductService.deleteProductFromDB(id as string);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
   }catch(err){
    res.status(400).json({
      success: false,
      message: "Failed to delete product!",
      error: err,
    });
   }
}

