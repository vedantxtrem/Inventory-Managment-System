import Product from "../models/product.model.js";
import AppError from "../utils/error.utils.js";


const addProduct = async (req,res,next)=>{
    try {
        const {name,description,price,inStock} = req.body;

        if(!name || !description || !price || !inStock){
            return next(new AppError("All fiels are mandatroy",400));
        }

        const product = await Product.create({
            name,
            description,
            price,
            inStock
        });

        if(!product){
            return next (new AppError("product not created",400));
        }

        await product.save();

        res.status(200).json({
            success : true,
            message : "product Created Successfully",
            product
        })

    } catch (error) {
        return next(new AppError(error.message,500));
    }
}