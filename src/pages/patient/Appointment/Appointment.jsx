import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { useContext } from 'react';
import { assets } from '../../../assets/assets';

function ConformAppointment() {
  const {docId}= useParams();
  const {doctors,dollarSignOnetime} = useContext(AppContext);
  const [docInfo,setDocInfo]=React.useState({});
  const fetchDocInfo=()=>{
    const docInfo=  doctors.find((doc)=>doc._id===docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(()=>{
    fetchDocInfo();
  },[doctors,docId]);


  return (
    <div>
      {/* ---------Doctor details----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
       <div>
         <img className='bg-green-50 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
       </div>
       <div className='flex-1 border border-gray-400 p-8 py-7 bg-white rounded-lg mx-2 sm:mx-0 mt-[-80] sm:mt-0 '>
        {/* ----Doctor info- name , detail experience------- */}
          <p className='flex items-centre gap-2 text-2xl font-medium text-gray-900 '>
            {docInfo.name} 
            <img className='w-4 h-4 mt-2 ml-1 ' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-centre gap-2 text-sm mt-1 text-gray-600 my-3'>
            <p>{docInfo.degree } - {docInfo.speciality}</p> 
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>


          {/* -------Book about ------- */}
          <div>
            <p className='flex items-centre gap-1  text-sm  font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='font-medium text-gray-500 mt-4'>
            Appointment fees: <span className='text-gray-600'>{dollarSignOnetime}{docInfo.fees}</span>
          </p>
       </div>
      </div>

    </div>
  )
}

export default ConformAppointment