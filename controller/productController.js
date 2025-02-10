import { createProductModel } from "../model/productSchema.js";
import { productModel } from "../postgres/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.findAll();
    if (!products || products.length === 0) {
      return res.status(404).json({ error: "Products not found" });
    } 
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const addProduct = async (req, res) => {
  const { productId, productName, productDesc, productRate, productQuantity } = req.body;

  if (!productId || !productName || !productRate || !productQuantity) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const existingProduct = await productModel.findOne({ where: { productId } });
    if (existingProduct) {
      return res.status(409).json({ message: "Product already exists" });
    }

    await productModel.create({ productId, productName, productDesc, productRate, productQuantity });
    return res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProduct=async(req,res)=>{
  // let productId=req.params.productId;
  const {productId}=req.body;
  try{
      const [upRows]=await productModel.update(req.body,{where:{productId}})
      if(upRows[0]===0){
              return res.status(404).json({message:"Product not found"});
      }
      // await upRows.update(req.body); // Update with new data

      return res.status(200).json({ message: "Updated Successfully" });
  }catch(error){
      console.log(error);
      return res.status(500).json("error: Internal Server Error"); 
  }
}

export const deleteProduct=async(req,res)=>{
  const {productId}=req.body;
  try{
      const product=await productModel.findOne({where: {productId: productId}});
      if(product==null){
          
          return res.status(404).json({message:"product not found"});
      }
      await product.destroy();
      return res.status(200).json({message:"deleted successfully"});
  }catch(error){
      console.log(error);
      return res.status(500).json("error: Internal Server Error"); 
      
  }
}