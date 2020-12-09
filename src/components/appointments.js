import React from "react";
import Mynavbar from "./navbar";
import AppointmentTable from "./appointmentTables";
import "../styles/appointmentTables.css"

const Appointments = () => {
  return (
    <>
      <div className="appointments">
        <Mynavbar/>
        <div className="a_header">
          <h2>Appointments</h2>
        </div>
        <AppointmentTable/>
      </div>
    </>
  );
};

export default Appointments;
