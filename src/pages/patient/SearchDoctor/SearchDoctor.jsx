import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import  {DoctorContext }  from '../../../context/DoctorContext';
import { useNavigate } from 'react-router-dom'; 

function SearchDoctor() {
  const {speciality} = useParams();
  const navigate = useNavigate();
  const {doctors}= useContext(DoctorContext );
  const [filterDoc,setFilterDoc]=React.useState([]);
  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter((doc)=>doc.speciality===speciality));
    }else{
      setFilterDoc(doctors);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[speciality,doctors]);

  console.log(speciality);
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row gap-5 mt-5 items-start' >
        <div className='flex flex-col gap-4 text-sm text-gray-600 mt-5'>
          <p onClick={()=>speciality==='General physician'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General physician"? "bg-green-50 text-black" : ""}`}>General physician</p>
          <p onClick={()=>speciality==='Gynecologist'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist"? "bg-green-50 text-black" : ""}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologist"? "bg-green-50 text-black" : ""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians"? "bg-green-50 text-black" : ""}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist"? "bg-green-50 text-black" : ""}`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist'? navigate('/patient/searchdoctor'): navigate('/patient/searchdoctor/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist"? "bg-green-50 text-black" : ""}`}>Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 pt-5 px-3 sm:px-0">
          {filterDoc.map((item,index)=>(
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

    </div>
  )
}

export default SearchDoctor