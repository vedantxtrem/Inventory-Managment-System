import React from 'react'
import { FiMenu } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function HomeLayout({ children }) {
    return (
        <>
            <div className='min-h-screen bg-base-100 flex flex-col items-center'>

                <div className="navbar bg-base-200 fixed top-5 w-[90%] rounded-full z-50">

                    <div className="md:ml-3 navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="ml-3 h-10 w-10 btn  btn-ghost btn-circle ">
                                <FiMenu className='h-7 w-7' />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/getproduct" > All Products</Link>
                                </li>
                                <li>
                                    <Link to="/addproduct" >Add Product</Link>
                                </li>
                                <li>
                                    <Link to="/about" >About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="  navbar-center">
                        <a className="btn btn-ghost text-sm  md:text-xl "> Inventory Managment System </a>
                    </div>

                    <div className="navbar-end md:mr-5">
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator w-4 h-5 md:w-5 md:h-7">
                                <BsBellFill className='w-full h-full animate-pulse' />
                            </div>
                        </button>
                    </div>

                </div>

                {children}



            </div>
        </>
    )
}

export default HomeLayout;