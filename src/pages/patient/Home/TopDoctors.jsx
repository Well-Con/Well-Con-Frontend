import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import useDoctor from "../../../api/useDoctor";
import useUser from '../../../api/useUser';
import { useState, useEffect } from 'react';


const TopDoctors = () => {
  const navigate = useNavigate();
  const { getAllDoctors, doctorLoading } = useDoctor();
  const { getUserById, userLoading } = useUser();
  const [doctors, setDoctors] = useState([]);



  useEffect(() => {
    
    getAllDoctors((res) => {
      if (res?.success) {
        setDoctors(res.data); // <-- if API actually has `data`
      } else {
        setDoctors(res);
       // <-- if API directly gives array
      }

     

    });

    
  }, []);

   console.log(doctors);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900  md:mx-10' >
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-centre text-sm'>Simply browse through our extensive list of trusted doctors</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={() => { navigate(`/patient/appointment/${item._id}`); scrollTo(0, 0) }} key={index} className='border border-green-500 rounded-xl max-w-441 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' >
            <img className='bg-green-50 ' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-centre gap-2 text-sm text-centre text-green-500 '>
                <p className='w-2 h-2 bg-green-500 rounded-full mt-1.5'></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>
                {item.expertise && item.expertise.join(", ")}
              </p>
            </div>
          </div>

        ))}
      </div>
      <button onClick={() => { navigate('/patient/searchdoctor/'); scrollTo(0, 0) }} className='text-white bg-green-500 text-gray-600 px-12 py-3 rounded-full mt-10  cursor-pointer hover:scale-105 transition-all'>More</button>
    </div>
  )
}

export default TopDoctors