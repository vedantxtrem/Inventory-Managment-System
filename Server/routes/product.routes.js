import {Router} from 'express';
import { addProduct , deleteProduct ,getAllProducts , UpdateProduct } from '../controllers/product.controllers.js'

const Productrouter = Router();

Productrouter.route('/')
                .post( addProduct )
                .get(getAllProducts);
   
Productrouter.route('/:id')               
                .put(UpdateProduct)
                .delete(deleteProduct);

export default Productrouter;