import React from "react";
import "../styles/dashboard.css";
import Navbar from "./navbar";
import CardIcon1 from "../assets/icons/kit.svg";
import CardIcon2 from "../assets/icons/patients2.svg";
import CardIcon3 from "../assets/icons/operation.svg";
import CardIcon4 from "../assets/icons/bank.svg";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Navbar />
        <div className="dashboard_cards">
          <div className="card">
            <img src={CardIcon1} className="card_icon" alt="Icon" />
            <div className="card_info">
                <h4>Appointments</h4>
                <h3>213</h3>
            </div>
          </div>
          <div className="card">
            <img src={CardIcon2} className="card_icon" alt="Icon" />
            <div className="card_info">
            <h4>New Patients</h4>
                <h3>104</h3>
            </div>
          </div>
          <div className="card">
            <img src={CardIcon3} className="card_icon" alt="Icon" />
            <div className="card_info">
            <h4>Operations</h4>
                <h3>24</h3>
            </div>
          </div>
          <div className="card">
            <img src={CardIcon4} className="card_icon" alt="Icon" />
            <div className="card_info">
            <h4>Hostipal Earnings</h4>
                <h3>$12,174</h3>
            </div>
          </div>
        </div>
        <div className="hospital_survey">
            <div className="hospital_yearly_survey">

            </div>
            <div className="hospital_monthly_survey">
                <div className="prev_month">

                </div>
                <div className="current_month">
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
