import React from 'react'
import Header from './Header'
import SpecialityMenu from './SpecialityMenu'
import TopDoctors from './TopDoctors'

const  PatientHome = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default PatientHome