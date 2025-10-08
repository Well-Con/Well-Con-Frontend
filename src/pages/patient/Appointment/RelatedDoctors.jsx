import React, { useContext, useEffect } from 'react'
import  {DoctorContext}  from '../../../context/DoctorContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality , docId}) => {
    const {doctors}= useContext(DoctorContext);
    const navigate = useNavigate();
    const [relDoc,setRelDoc]=React.useState([]);
    useEffect(()=>{
        let relatedDocs= doctors.filter((doc)=> doc.speciality===speciality && doc._id!==docId);
        setRelDoc(relatedDocs);
    },[docId,speciality,doctors])

  return (
   <div className='flex flex-col items-center gap-4 my-16 text-gray-900  md:mx-10' >
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-centre text-sm'>Simply browse through our extensive list of trusted doctors</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 pt-5 px-3 sm:px-0">
            {relDoc.slice(0,5).map((item,index)=>(
             <div onClick={()=>{navigate(`/patient/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-green-500 rounded-xl max-w-441 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' >
                <img className='bg-green-50 ' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-centre gap-2 text-sm text-centre text-green-500 '>
                        <p className='w-2 h-2 bg-green-500 rounded-full mt-1.5'></p><p>Available</p>
                    </div>
                     <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                     <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
             </div>

            ))}
        </div>
    </div>
  )
}

export default RelatedDoctors