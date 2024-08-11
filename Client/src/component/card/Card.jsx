import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { deleteProduct, getAllProduct } from '../../Redux/Slice/Product.Slice';
import { useDispatch } from 'react-redux';

function Card({ data }) {

    const dispatch = useDispatch();

    async function onProductDelete(id) {
        if (window.confirm("Are you sure you want to delete the course?")) {
            const res = await dispatch(deleteProduct(id));
            if (res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }

    return (
        <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h2 className="card-title"> {data?.title} </h2>
                <MdDelete onClick={()=> onProductDelete(data?._id)}  className='absolute top-4 right-3 text-xl'/> 
                <p> {data?.description} </p>
                 
                <div className="card-actions w-full flex justify-around">
                    <button className="btn"> Quantity :  {data?.inStock} </button>
                    <button className="btn"> &#8377; {data?.price} </button>
                    <Link to="/editproduct"> <button className="btn"> edit </button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Card