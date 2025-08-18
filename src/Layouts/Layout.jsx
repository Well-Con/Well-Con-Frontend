// import React from 'react';
// // Correcting the import path for Sidebar
// import Sidebar from '../pages/doctor/contains/Sidebar'; 
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//    return (
//     <div style={{ display: 'grid', gridTemplateColumns: isSidebarCollapsed ? '70px 1fr' : '250px 1fr', minHeight: '100vh', transition: 'grid-template-columns 0.3s ease-in-out' }}>
//       {/* The sidebar will have a fixed width and will not scroll */}
//       <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: isSidebarCollapsed ? '70px' : '250px', overflow: 'hidden', transition: 'width 0.3s ease-in-out', backgroundColor: '#fff' }}>
//         <Sidebar onToggle={toggleSidebar} />
//       </div>

//       {/* The main content area will take up the rest of the space and will be scrollable */}
//       <main style={{ padding: '24px', overflowY: 'auto', gridColumn: 2 }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;



import Sidebar from '../pages/doctor/contains/Sidebar';

import Footer from '../pages/doctor/contains/Footer';


import { Outlet } from 'react-router-dom';

const Layout = () => (

<div style={{ display: 'flex', flexDirection: 'column',  minWidth:'100vw',height: '100vh'}}>

 <div style={{ display: 'flex', flex: 1 , position: 'fixed', minWidth:'100vw'}}>

 <Sidebar style={{width:'250px'}} />

<main style={{ flex: 1, padding: '24px'  , width: 'full'}}>

<Outlet />

</main>

</div>


</div>

);

export default Layout;