import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const PatientNavbar=()=>{
  const navigate=useNavigate();
  const [showMenu,setShowMenu]=useState(false);
  
  const [token ,settoken]=useState(true);

 
    return (
      
      <div className='flex item-centre justify-between p-4 mb-5 border-b border-gray-400'>
        <div className='flex flex-row align-start items-centre  cursor-pointer'>
          <p>
            <i className="fa-brands fa-slack fa-lg text-green-500 mt-5"></i>
          </p>
          
          <h2 className="text-[27.42px] text-green-500 pl-4 ">Well-Con</h2>

        </div>
        
        <ul className='hidden md:flex items-start gap-5 '>
          <NavLink to={"/patient/home"}>
            <li className="py-1">
              HOME
              <hr className='outline-none h-0.5 bg-primarycolor w-3/5 m-auto hidden' />
            </li>
          
          </NavLink>
          <NavLink to={"/patient/searchdoctor/All"}>
            <li className="py-1">
              All DOCTORS
              <hr className=' outline-none h-0.5 bg-primarycolor w-3/5 m-auto hidden' />
            </li>
            
          </NavLink>
          <NavLink to={"/patient/myappointment"}>
            <li className="py-1">
              MY APPOINTMENTS
              <hr className='outline-none h-0.5 bg-primarycolor w-3/5 m-auto hidden' />
            </li>
          </NavLink>
          <NavLink to={"/patient/about"}>
            <li className="py-1">
              ABOUT US
              <hr className='outline-none h-0.5 bg-primarycolor w-3/5 m-auto hidden' />
            </li>
            
          </NavLink>
          <NavLink to={"/patient/contact"}>
            <li className="py-1">
              CONTACT
              <hr className='outline-none h-0.5 bg-primarycolor w-3/5 m-auto hidden' />
            </li>
          </NavLink>
          
        </ul>
        <div className='flex items-centre gap-4'>
          {
          token ?
          <div className='flex item-centre gap-2 cursor-pointer group' onClick={()=>setShowMenu(!showMenu)}>
            <img className='w-9 h-9 rounded-full' src={assets.profile_pic} alt='patient profile picture'></img>
            <img src={assets.dropdown_icon} alt='dropdown icon' className='w-2.5'></img>
            <div className='absolute top-4 right-38 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block' >
              <div className={`min-w-48 bg-stone-100 rounded flex flex-col gwp-4 p-4`}>
                <p onClick={()=>navigate('/patient/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>settoken(false)} className='hover:text-black cursor-pointer'>Logout</p>

              </div>
            </div>

          </div>
          :<button className='bg-green-500 text-white py-3 px-8 rounded-full '>Create account</button>
          }
        </div>
      </div>
    )
  }



export default PatientNavbar