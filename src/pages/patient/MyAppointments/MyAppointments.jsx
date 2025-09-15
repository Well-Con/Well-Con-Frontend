import React, { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'

function PatientAppointments() {
  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((items, index) => (
          <div className='flex flex-row justify-between gap-6   py-2 border-b' key={index}>
            <div className='flex flex-row gap-4'>
              <div className=''>
                <img className='w-32 bg-green-100 ' src={items.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{items.name}</p>
                <p>{items.speciality}</p>


              </div>
            </div>
            <div>
              {

              }
            </div>

            <div>
              <p className='text-xs text-neutral-700 font-medium'>25, July, 2024</p>
              <p className='text-sm'> 8:30 PM</p>

            </div>

            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-green-500 hover:text-white traniition-all duration-300 cursor-pointer'>Make Payment</button>
              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white traniition-all duration-300 cursor-pointer'>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientAppointments