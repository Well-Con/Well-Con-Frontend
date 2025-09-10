

import Layout from './Layouts/Layout';
import Dashboard from './pages/doctor/Dashboard/Dashboard.jsx';
import Message from './pages/doctor/Message/Message.jsx';
import History from './pages/doctor/History/History.jsx';
import Appointment from './pages/doctor/MyAppointments/Appointments.jsx';
import Signindoctor from './pages/doctor/Login/Signindoctor.jsx';

import PersonalDetails from './pages/doctor/Forms/Personal.jsx';
import ProfessionalDetails from './pages/doctor/Forms/Professional.jsx';
import Availability from './pages/doctor/Forms/Availability.jsx';
import Documentation from './pages/doctor/Forms/Documentation.jsx';
import Signupdoctor from './pages/doctor/Login/Signupdoctor.jsx';
import PatientLogin from './pages/patient/Login/SigninPatient.jsx';
import Signuppatient from './pages/patient/Login/Signuppatient.jsx';

import PatientHome from './pages/patient/Home/Home.jsx';
import About from './pages/patient/About/About.jsx';
import Contact from './pages/patient/Contact/Contact.jsx';
import PatientAppointments from './pages/patient/MyAppointments/MyAppointments.jsx';
import PatientProfile from './pages/patient/MyProfile/MyProfile.jsx';
import SearchDoctor from './pages/patient/SearchDoctor/SearchDoctor.jsx';
import ConformAppointment from './pages/patient/Appointment/Appointment.jsx';
import PatientLayout from './Layouts/PatientLayout.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* Doctor auth */}
      <Route path="/doctorregistration" element={<Signupdoctor />} />
      <Route path="/logindoctor" element={<Signindoctor />} />

      {/* Doctor registration steps */}
      <Route path="/registrationdoctor0" element={<PersonalDetails />} />
      <Route path="/registrationdoctor1" element={<ProfessionalDetails />} />
      <Route path="/registrationdoctor2" element={<Availability />} />
      <Route path="/registrationdoctor3" element={<Documentation />} />

      {/* Patient auth */}
      <Route path="/loginpatient" element={<PatientLogin />} />
      <Route path="/registerpatient" element={<Signuppatient />} />

      {/* Patient pages with layout of navbar */}
      
        <Route element={<PatientLayout />}>
          <Route path="/patient/home" element={<PatientHome />} />
          <Route path="/patient/about" element={<About />} />
          <Route path="/patient/contact" element={<Contact />} />
          <Route path="/patient/myappointment" element={<PatientAppointments />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/patient/searchdoctor/:speciality" element={<SearchDoctor />} />
          <Route path="/patient/searchdoctor" element={<SearchDoctor />} />
          <Route path="/patient/appointment/:docId" element={<ConformAppointment />} />
        </Route>

      


      {/* Doctor dashboard with layout of sidebar*/}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
