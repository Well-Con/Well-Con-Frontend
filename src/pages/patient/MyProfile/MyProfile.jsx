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
  const [isEdit, setIsEdit] = useState(true);


  return (
    <div className='flex flex-col gap-2 text-sm max-w-lg '>

      <img className='w-36  rounded' src={assets.profile_pic} alt="" />
      {
        isEdit ?
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> :
          <p className='font-medium text-3xl  text-neutral-800 mt-4 '>{userData.name}</p>
      }
      <div>
        <hr  className='bg-zinc-400 h-[1px] border-none'/>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
        </div>
        <div>
          <p>Phone:</p>
          {
            isEdit ?
              <input type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> :
              <p>{userData.phone}</p>
          }
        </div>

        <div>
          <p>Address:</p>
          {
            isEdit ?
              <div>
                <input type="text" value={userData.address.locality} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, locality: e.target.value } }))} />
                <input type="text" value={userData.address.city} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} />
                <input type="text" value={userData.address.state} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, state: e.target.value } }))} />
                <input type="text" value={userData.address.country} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, country: e.target.value } }))} />

              </div> :
              <div>
                <p>{userData.address.locality} </p>
                <p>{userData.address.city}</p>
                <p>{userData.address.state}</p>
                <p>{userData.address.country}</p>

              </div>

          }
        </div>

        <p>BASIC INFORMATION</p>

        <div>
          <p>Gender:</p>
          {
            isEdit ?
              <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select> :
              <p>{userData.gender}</p>
          }

        </div>

        <div>
          <p>Age:</p>
          {
            isEdit ?
              <input type="telephone" value={userData.age} onChange={(e) => setUserData(prev => ({ ...prev, age: e.target.value }))} /> :
              <p>{userData.age}</p>
          }
         
        </div>

      </div>

      {
        isEdit ?
        <button onClick={()=>setIsEdit(false)}>Save information</button> :
        <button onClick={()=>setIsEdit(true)}>Edit</button>
      }

    </div>
  )
}

export default PatientProfile