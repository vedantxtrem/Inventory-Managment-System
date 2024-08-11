import React, { useState } from 'react';
import HomeLayout from '../../Layout/HomeLayout';
import image01 from '../../assets/images.png';
import toast from 'react-hot-toast';
import { addProduct } from '../../Redux/Slice/Product.Slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State to manage user input for product details
    const [userInput, setUserInput] = useState({
        title: "",
        description: "",
        price: "",
        inStock: "",
    });

    // Function to handle user input changes
    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });
    }

    // Function to handle form submission
    async function onFormSubmit(e) {
        e.preventDefault();

        // Validate form fields
        const { title, description, price, inStock } = userInput;

        if (!title || !description || !price || !inStock) {
            toast.error("All fields are mandatory by ui");
            return;
        }

        // Dispatch the addProduct action and handle the response
        try {
            const response = await dispatch(addProduct(userInput));

            if (response?.payload?.success) {
                toast.success("Product added successfully!");
                setUserInput({
                    title: "",
                    description: "",
                    price: "",
                    inStock: "",
                });
                navigate("/getproduct");
            } else {
                toast.error("Failed to add product. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    }

    return (
        <HomeLayout>
            <div className='h-screen w-[90%] flex flex-col justify-center items-center'>
                <div className='w-[95%] h-[60%] md:w-[60%] md:h-[55%] flex flex-col justify-center rounded-lg shadow-[0_0_10px_gray] relative'>
                    <div className='w-full flex justify-center'>
                        <h1 className='text-xl w-fit text-center p-2 rounded-lg mb-3 bg-gradient-to-r from-base-100 to-base-200 text-orange-400 font-bold'>Create Product</h1>
                    </div>

                    <div className='w-full flex justify-center items-center mt-4'>
                        <div className='hidden md:block w-[50%]'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={image01} className='h-[60%] w-[55%]' alt="Product Visual" />
                            </div>
                        </div>

                        <div className='w-[50%] flex justify-center'>
                            <form onSubmit={onFormSubmit} noValidate className='flex flex-col justify-center'>
                                <label className="input input-bordered flex justify-center items-center gap-2 mb-3">
                                    Name:
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Product Name"
                                        required
                                        name="title"
                                        id="title"
                                        value={userInput.title}
                                        onChange={handleUserInput}
                                    />
                                </label>

                                <textarea
                                    className="textarea textarea-secondary w-full mb-3"
                                    placeholder="Product Description"
                                    required
                                    name="description"
                                    id="description"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                ></textarea>

                                <label className="input input-bordered flex items-center gap-2 mb-3">
                                    Price:
                                    <input
                                        type="number"
                                        className="grow"
                                        placeholder="In Rupees"
                                        required
                                        name="price"
                                        id="price"
                                        value={userInput.price}
                                        onChange={handleUserInput}
                                    />
                                </label>
                                
                                <label className="input input-bordered flex items-center gap-2 mb-3">
                                    Stock:
                                    <input
                                        type="number"
                                        className="grow"
                                        placeholder="Quantity"
                                        required
                                        name="inStock"
                                        id="inStock"
                                        value={userInput.inStock}
                                        onChange={handleUserInput}
                                    />
                                </label>
                                
                                <button type="submit" className="btn text-xl">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AddProduct;
