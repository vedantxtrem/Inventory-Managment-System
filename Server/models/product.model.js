import {Schema , model} from "mongoose";

const productSchema = new Schema({
    title : {
        type : String,
        requried : [true,"Name is required"],
    },
    description: {
        type: String,
        minLength: [8, 'Description must be atleast 8 characters'],
        maxLength: [200, 'Description should be less than 200 characters'],
        trim: true,
        requried: true,
    },
    price : {
        type : Number,
        requried : [true,"type is requried"],
    },
    inStock : {
        type : Number,
        requried : true,
    }
},{
    timestamps : true
})

const Product = model('Product',productSchema);

export default Product;