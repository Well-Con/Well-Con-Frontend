import PatientFooter from "../components/PatientFooter.jsx";
import PatientNavbar from "../components/PatientNavbar.jsx";
import { Outlet } from "react-router-dom";

function PatientLayout() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      {/* Navbar at the top */}
      <PatientNavbar />

      {/* This is where the child routes will render */}
      <main>
        <Outlet />
      </main>
      <PatientFooter/>
    </div>
  );
}

export default PatientLayout;
