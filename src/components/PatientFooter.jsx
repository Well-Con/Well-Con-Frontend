import React from 'react'

const PatientFooter = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14my-10 mt-40 text-sm pb-10'>
        {/* Footer left part */}
        <div>
        <div className='flex flex-row align-start items-centre mb-5 w-40 cursor-pointer'>
          <p>
            <i className="fa-brands fa-slack fa-lg text-green-500 mt-5"></i>
          </p>
          
          <h2 className="text-[27.42px] text-green-500 pl-4 ">Well-Con</h2>

        </div>
        <p className='w-full md:w-2/3 text-gray-600  leading-6'>Well-Con connects patients with trusted doctors, making healthcare more accessible and convenient. Book your appointments easily and get the care you deserve.</p>


        </div>
        {/* Footer central part */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Footer right part */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+0-000-000-000</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright section */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default PatientFooter