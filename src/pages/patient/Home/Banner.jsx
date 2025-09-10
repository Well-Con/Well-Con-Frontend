import React from 'react'
import { assets } from '../../../assets/assets'

const Banner = () => {
  return (
    <div>
        {/* Banner left section */}
        <div>
            <div>
                <p>Book Appointment</p>
                <p>With 100+ Trusted Doctors</p>
            </div>
            <button>Create account</button>

        </div>
        {/* Banner right section */}
        <div>
            <img src={assets.appointment_img} alt="" />

        </div>
    </div>
  )
}

export default Banner