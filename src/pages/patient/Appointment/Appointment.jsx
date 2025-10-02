import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import  DoctorContextProvider  from '../../../context/DoctorContext';
import { useContext } from 'react';
import { assets } from '../../../assets/assets';
import RelatedDoctors from './RelatedDoctors';

function ConformAppointment() {
  const {docId}= useParams();
  const {doctors,dollarSignOnetime} = useContext(DoctorContextProvider);
  const daysofWeek=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const [docInfo,setDocInfo]=React.useState({});
  const [docSlots,setDocSlots]=React.useState([]);
  const [slotIndex,setSlotIndex]=React.useState(0);
  const [slotTime,setSlotTime]=React.useState('');

  const getAvailableSlots=  async()=>{
    
    setDocSlots([]);
    //getting current date
    const today=new Date();
    for(let i=0;i<7;i++){
      //getting date with index
      let currentdate= new Date(today);
      currentdate.setDate(today.getDate()+i);
      //setting end time for the date with index
      let endtime=new Date();
      endtime.setDate(today.getDate()+i);
      endtime.setHours(21,0,0,0);
      //setting hours
      if(today.getDate()===currentdate.getDate()){
        currentdate.setHours(currentdate.getHours()>10? currentdate.getHours()+1 : 10);
        currentdate.setMinutes(currentdate.getMinutes()>30? 30: 0);

      }else{
        currentdate.setHours(10,0,0,0);
        currentdate.setMinutes(0,0,0);
      }
      let timeSlots = [];

      while(currentdate<endtime){
        let formattedTime=currentdate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});

        timeSlots.push({
          datetime: new Date(currentdate),
          time: formattedTime,
          
        });

        //increment current time by 30 mins
        currentdate.setMinutes(currentdate.getMinutes()+30,0,0);
        
        
      }
      setDocSlots(prev=>[...prev,timeSlots]);
    }


  }
  const fetchDocInfo=()=>{
    const docInfo=  doctors.find((doc)=>doc._id===docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(()=>{
    fetchDocInfo();
  },[doctors,docId]);

  useEffect(()=>{
    getAvailableSlots();
  },[docInfo]);

  useEffect(()=>{
    console.log(docSlots);

  },[docSlots]);


  return (
    <div>
      {/* ---------Doctor details----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
       <div>
         <img className='bg-green-100 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
       </div>
       <div className='flex-1 border border-gray-400 p-8 py-7 bg-white rounded-lg mx-2 sm:mx-0 mt-[-80] sm:mt-0 '>
        {/* ----Doctor info- name , detail experience------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 '>
            {docInfo.name} 
            <img className='w-4 h-4 mt-2 ml-1 ' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 my-3'>
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
      {/* ---------Available slots----------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
        <p className=''>Booking Slots</p>
        <div className='flex gap-3 overflow-x-scroll mt-4 w-full items-center'>
          {
            docSlots.length&& docSlots.map((item,index)=>(
              <div onClick={()=>{setSlotIndex(index)}} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-green-500 text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0]&&daysofWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0]&&item[0].datetime.getDate()}</p>

              </div>

            ))
          }
        </div>

        <div className='flex gap-3 overflow-x-scroll mt-4 w-full items-center'>
          {
            docSlots.length && docSlots[slotIndex].map((item,index)=>(
                  <div onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${slotTime===item.time ? 'bg-green-500 text-white' : 'border border-gray-300 text-gray-400'}`} key={index}>
                    {item.time.toLowerCase()}
                  </div>
                ))
          }
        </div>
        <button className='bg-green-500 text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer'>Book Appointment</button>
        

      </div>

      {/* ---------Listing Related Doctors----------- */}
      <RelatedDoctors docid={docId} speciality={docInfo.speciality} />

    </div>
  )
}


export default ConformAppointment