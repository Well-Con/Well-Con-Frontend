import React, { useState } from 'react'
import { assets } from '../../../assets/assets'

function PatientProfile() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    email: "sample@gmail.com",
    phone: "+91 9876543210",
    age: 25,
    address: {
      locality: "34B ,Shastri Nagar, Near DAV School",

      city: "New Delhi",
      state: "Delhi",
      country: "India",


    },
    gender: 'Male',

  })
  const [isEdit, setIsEdit] = useState(false);


  return (
    <div className='flex flex-col gap-2 text-sm max-w-lg '>

      <img className='w-36  rounded' src={assets.profile_pic} alt="" />
      {
        isEdit ?
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 border border-gray-400 rounded' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> :
          <p className='font-medium text-3xl  text-neutral-800 mt-4 '>{userData.name}</p>
      }
      <div className='flex flex-col gap-4 text-neutral-700'>
        <hr  className='bg-zinc-400 h-[1px] border-none'/>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='flex flex-row gap-5'>
          <p className='font-medium'>Email id: </p>
          <p className='text-green-500'>{userData.email}</p>
        </div>
        <div className='flex flex-row gap-7'>
          <p  className='font-medium'>Phone:</p>
          {
            isEdit ?
              <input required className='border border-gray-400 rounded' type="telephone" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> :
              <p className='bg-gray-50'>{userData.phone}</p>
          }
        </div>

        <div className='flex flex-row gap-5'>
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <div className='flex flex-col gap-1'>
                <input className='border border-gray-400 rounded' type="text" value={userData.address.locality} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, locality: e.target.value } }))} />
                <input className='border border-gray-400 rounded' type="text" value={userData.address.city} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} />
                <input className='border border-gray-400 rounded' type="text" value={userData.address.state} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, state: e.target.value } }))} />
                <input className='border border-gray-400 rounded' type="text" value={userData.address.country} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, country: e.target.value } }))} />

              </div> :
              <div>
                <p>{userData.address.locality} </p>
                <p>{userData.address.city}</p>
                <p>{userData.address.state}</p>
                <p>{userData.address.country}</p>

              </div>

          }
        </div>

        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>

        <div className='flex flex-row gap-5'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
              <select className='border border-gray-400 rounded' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select> :
              <p>{userData.gender}</p>
          }

        </div>

        <div className='flex flex-row gap-10'>
          <p className='font-medium'>Age:</p>
          {
            isEdit ?
              <input className='border border-gray-400 rounded' type="telephone" value={userData.age} onChange={(e) => setUserData(prev => ({ ...prev, age: e.target.value }))} /> :
              <p>{userData.age} years</p>
          }
         
        </div>

      </div>

     <div className='mt-10'>
       {
        isEdit ?
        <button className='border border-green-500  px-8 py-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-all ' onClick={()=>setIsEdit(false)}>Save information</button> :
        <button className='border border-green-500  px-8 py-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-all ' onClick={()=>setIsEdit(true)}>Edit</button>
      }
     </div>

    </div>
  )
}

export default PatientProfile