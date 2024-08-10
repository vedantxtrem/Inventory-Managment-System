import React from 'react'
import HomeLayout from '../Layout/HomeLayout.jsx'

function HomePage() {
  return (
    <HomeLayout>

      <div className='h-[90vh] w-full ' >
        <div className="hero bg-base-100 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold ">
                {/* <span className='text-red-500   '>H</span>
                <span className='text-yellow-300 ' >e</span>
                <span className='text-green-500  '>l</span>
                <span className='text-green-500  '>l</span>
                <span className='text-blue-500  '>o </span>

                <span className='text-red-500  '>t</span>
                <span className='text-blue-500  '>h</span>
                <span className='text-yellow-300  '>e</span>
                <span className='text-green-500  '>r</span>
                <span className='text-yellow-300   '>e</span> */}
                Hello there
              </h1>
              <p className="py-6 ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">All Products</button>
            </div>
          </div>
        </div>
      </div>

    </HomeLayout>
  )
}

export default HomePage