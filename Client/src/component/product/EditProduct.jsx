import React, { useState, useEffect } from 'react';
import { editProduct, getAllProduct } from '../../Redux/Slice/Product.Slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Ensure this is imported
import { RxCross2 } from "react-icons/rx";

function EditProduct({ isOpen, onClose, currData }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State to manage user input for product details
    const [userInput, setUserInput] = useState({
        id : "",
        price: "",
        inStock: "",
    });

    // Update state with current data if available
    useEffect(() => {
        if (currData) {
            setUserInput({
                price: currData.price || "",
                inStock: currData.inStock || "",
            });
        }
    }, [currData]);

    // Function to handle user input changes
    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
            id : currData._id,
        });
    }

    // Function to handle form submission
    async function onFormSubmit(e) {
        e.preventDefault();
    
        // Validate form fields
        const { price, inStock } = userInput;
    
        if (!price || !inStock) {
            toast.error("All fields are mandatory");
            return;
        }
    
        // Ensure currData._id is available and valid
        if (!currData?._id) {
            toast.error("Product ID is missing");
            return;
        }
    
        // Dispatch the editProduct action with correct payload format
        try {
            const response = await dispatch(editProduct(userInput))
    
            toast.success("Product updated successfully!");
            setUserInput({
                price: "",
                inStock: "",
            });
            navigate("/getproduct");
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
        await dispatch(getAllProduct());
        onClose(); // Close the modal or component after submission
    }

    if (!isOpen) return null;

    return (
        <div className='w-fit p-4 pt-10 flex flex-col justify-center rounded-lg shadow-[0_0_10px_gray] absolute z-50 bg-base-100 left-16 md:left-44  top-40 '>
            <RxCross2 onClick={onClose} className='absolute top-3 right-5 text-xl' />
            <div className=' flex justify-center'>
                <form onSubmit={onFormSubmit} noValidate className='flex flex-col justify-center'>
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

                    <button type="submit" className="btn text-xl">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;
