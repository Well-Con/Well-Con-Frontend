import React from 'react';
import ProfileAndStats from './Profile';
import Calendar from './Calendar';
import AppointmentRequest from './Request';
import AppointmentList from './Appointment';
import RecentPatients from './Recent';
import './Dashboard.css';



export default function App() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-scroll">
        <div className="dashboard-content">
          <Header />
          <div className="grid-two">
            <div className="main-col">
              <ProfileAndStats />
            </div>
            <div className="side-col">
              <Calendar />
            </div>
          </div>
          <div className="grid-two">
            <AppointmentRequest />
            <AppointmentList />
          </div>
          <RecentPatients />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>Hello Dr. Jackson Santos</h1>
      <p>Here are your important tasks and reports. Please check the next appointment.</p>
    </div>
  );
};
