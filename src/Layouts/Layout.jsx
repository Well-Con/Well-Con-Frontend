import Sidebar from '../pages/doctor/contains/Sidebar';
import Footer from '../pages/doctor/contains/Footer'; 
import { Outlet } from 'react-router-dom';
const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column',  minWidth:'100vw'}}>
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar style={{width:'250px'}} />
      <main style={{ flex: 1, padding: '24px' }}>
        <Outlet />
      </main>
    </div>
   
  </div>
);




export default Layout