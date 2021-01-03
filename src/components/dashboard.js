import React from "react";
import "../styles/dashboard.css";
import Mynavbar from "./navbar";
import CardIcon1 from "../assets/icons/kit.svg";
import CardIcon2 from "../assets/icons/crutch.svg";
import CardIcon3 from "../assets/icons/operation.svg";
import CardIcon4 from "../assets/icons/bank.svg";
import { NavLink } from "react-router-dom";
// import MultiChart  from "./multichart";
// import MonthlyChart from "./monthlychart";
// import AppointmentTable from "./appointmentTables";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Mynavbar />
        <div className="dashboard_cards">
          <div className="card1">
            <img src={CardIcon1} className="card_icon1" alt="Icon" />
            <div className="card_info1">
              <NavLink to="/appointments">
                <h4>Appointments</h4>
              </NavLink>
              <h3>213</h3>
            </div>
          </div>
          <div className="card1">
            <img src={CardIcon2} className="card_icon1" alt="Icon" />
            <div className="card_info1">
              <NavLink to="/patients">
                <h4>Patients</h4>
              </NavLink>
              <h3>104</h3>
            </div>
          </div>
          <div className="card1">
            <img src={CardIcon3} className="card_icon1" alt="Icon" />
            <div className="card_info1">
              <NavLink to="/doctors">
                <h4>Doctors</h4>
              </NavLink>
              <h3>24</h3>
            </div>
          </div>
          <div className="card1">
            <img src={CardIcon4} className="card_icon1" alt="Icon" />
            <div className="card_info1">
              <NavLink to="/departments">
                <h4>Departments</h4>
              </NavLink>
              <h3>5</h3>
            </div>
          </div>
        </div>
        {/* <div className="hospital_survey">
            <div className="hospital_yearly_survey">
            <MultiChart/>
            </div>
            <div className="hospital_monthly_survey">
                <div className="prev_month">
                <MonthlyChart/>
                </div>
                <div className="current_month">
                <MonthlyChart/>
                </div>
            </div>
        </div> */}
        {/* <div className="appointment_activity">
          <h2 className="appointment_header">Appointment Activity </h2>
        <AppointmentTable/>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
