import {Router} from 'express';
import {     addProduct , deleteProduct,getAllProducts } from '../controllers/product.controllers.js'

const Productrouter = Router();

Productrouter.route('/')
                .post( addProduct )
                .get(getAllProducts)

export default Productrouter;