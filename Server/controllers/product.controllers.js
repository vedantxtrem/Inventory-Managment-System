import Product from "../models/product.model.js";
import AppError from "../utils/error.utils.js";


const addProduct = async (req,res,next)=>{
    try {
        const {title,description,price,inStock} = req.body;

        console.log(title ,description,price,inStock);
        

        if(!title || !description || !price || !inStock){
            return next(new AppError("All fiels are mandatroy",400));
        }

        const product = await Product.create({
            title,
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

const deleteProduct = async (req,res,next)=>{
    try  {
        const { id } = req.params;

        const product = await Product.findById(id);

        if(!product){
            return next(new AppError("unable to fetch product",400));
        }

        await product.deleteOne();

        res.status(200).json({
            success : true,
            message : "Delete products Successfully",
        })  

    } catch (error) {
        return next(new AppError(error.message,500));
    }
}

const getAllProducts = async (req,res,next)=>{
    try {
        const product = await Product.find({});

        if(!product){
            return next(new AppError("unable to fetch product",400));
        }

        res.status(200).json({
            success : true,
            message : "All products",
            product
        })  
    } catch (error) {
        return next(new AppError(error.message,500));
    }
}
const UpdateProduct = async (req,res,next)=>{
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(
            id,
            {
                $set : req.body,
            },
            {
                runValidators : true,
            }
        )
        if(!product){
            return next(new AppError("value not given product",400));
        }

        res.status(200).json({
            success : true,
            message : "All products",
            product
        })  

    } catch (error) {
        return next(new AppError(error.message,500));
    }
}

export {
    addProduct,
    deleteProduct,
    getAllProducts,
    UpdateProduct,
}