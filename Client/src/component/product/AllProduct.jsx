import React, { useEffect } from 'react';
import HomeLayout from '../../Layout/HomeLayout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/Slice/Product.Slice.js';
import Card from '../card/Card.jsx';

function AllProduct () {
    const dispatch = useDispatch();

    // Get the product data from the Redux store
    const { productData } = useSelector((state) => state.product);

    // Function to load products
    async function loadProduct() {
        await dispatch(getAllProduct());
    }

    // Load products when the component mounts
    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-screen pt-12 flex flex-col gap-10">
                <h1 className="text-center text-3xl font-semibold mt-20 mb-4">
                    Explore the Product
                    <span className="font-bold text-yellow-500">
                        {" "}Inventory Management System
                    </span>
                </h1>


                {/* Display products */}

                <div className=" mb-10 flex justify-center items-center flex-wrap gap-14 text-center">
                    {productData?.map((element) => {
                        return <Card key={element._id} data={element} />
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}

export default AllProduct;
