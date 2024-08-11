import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import image01 from '../../assets/images.png'

function AddProduct() {
    return (
        <HomeLayout>
            <div className='h-screen w-[90%] flex flex-col justify-center items-center'>
                <div className='w-[95%] h-[60%]  md:w-[60%] md:h-[55%] flex flex-col  justify-center rounded-lg shadow-[0_0_10px_gray] relative'>
                    <div className='w-full flex justify-center '>
                        <h1 className='text-xl w-fit text-center p-2 rounded-lg mb-3 bg-gradient-to-r from-base-200 to-base-300'>Create Product</h1>
                    </div>
                    <div className='w-full flex justify-center items-center '>
                        <div className='hidden md:block w-[50%] '>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={image01} className='h-[60%] w-[55%] ' alt="" />
                            </div>
                        </div>

                        <div className='w-[50%]  flex justify-center '>
                            <form className='flex flex-col justify-center '>
                                <label className="input input-bordered flex justify-center items-center gap-2 mb-3">
                                    Name:
                                    <input type="text" className="grow" placeholder="Daisy" />
                                </label>

                                <textarea className="textarea textarea-secondary w-full mb-3" placeholder="Product Discription"></textarea>

                                <label className="input input-bordered  flex items-center gap-2 mb-3">
                                    Price:
                                    <input type="number" className="grow" placeholder="In Rupess" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mb-3">
                                    stock:
                                    <input type="number" className="grow" placeholder="Quantity" />
                                </label>
                                <button className="btn">Button</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </HomeLayout >
    )
}

export default AddProduct