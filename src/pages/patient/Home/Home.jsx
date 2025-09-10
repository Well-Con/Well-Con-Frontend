import React from 'react'
import Header from './Header'
import SpecialityMenu from './SpecialityMenu'
import TopDoctors from './TopDoctors'
import Banner from './Banner'

const  PatientHome = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default PatientHome