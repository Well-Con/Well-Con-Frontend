import './App.css';


import Layout from './Layouts/Layout';
import Dashboard from './pages/doctor/Dashboard/Dashboard.jsx';
import Message from './pages/doctor/Message/Message.jsx';
import Connect from './pages/doctor/Connect';
import History from './pages/doctor/History/History.jsx';
import Appointment from './pages/doctor/Appointment';
import Signindoctor from './pages/doctor/Login/Signindoctor.jsx';
import SigninPatient from './pages/patient/signin.jsx'; 
import Chat from './pages/doctor/Chat.jsx'
import PersonalDetails from './pages/doctor/Forms/Personal.jsx';
import ProfessionalDetails from './pages/doctor/Forms/Professional.jsx';
import Availability from './pages/doctor/Forms/Availability.jsx';
import Documentation from './pages/doctor/Forms/Documentation.jsx';
import Signupdoctor from './pages/doctor/Login/Signupdoctor.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/doctorregistration' element={<Signupdoctor />} />
         <Route path='/logindoctor' element={<Signindoctor />} />
         <Route path='/loginpatient' element={<SigninPatient/>}/>
         <Route path='/registrationdoctor0' element={<PersonalDetails />} />
         <Route path='/registrationdoctor1' element={<ProfessionalDetails />} />
          <Route path='/registrationdoctor2' element={<Availability />} />
          <Route path='/registrationdoctor3' element={<Documentation />} />
         
       <Route element={<Layout />}>
       
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/appointments" element={<Appointment/>} />
        <Route path="/chat/:id" element={<Chat />} />

       
    
        
        </Route>
        


      </Routes>
    </Router>
  );
}

export default App;

