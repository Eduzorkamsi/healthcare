import React from "react";
// import Doc4 from "../assets/images/doc4.svg";
import BackArrow from "../assets/icons/back.svg";
import Bookmark from "../assets/icons/bookmark.svg";
import "../styles/doctorlogs.css";
import Ellipse3 from "../assets/icons/Ellipse3.svg";
import Message from "../assets/icons/messagebutton.svg";
import Appointment from "../assets/icons/appointmentbutton.svg"

const Doctorslogs = () => {
  return (
    <>
      <div className="doctorslogs">
        <div className="doctor_profile">
          <div className="profile_image">
            <img src={BackArrow} className="profile_back" alt="profile" />
            <img src={Bookmark} className="profile_bookmark" alt="profile" />
          </div>
          <div className="profile_details">
            <div className="profile_name">
              <h3>Dr. Jacob Jones</h3>
            </div>
            <div className="field_hospital">
              <h4>Heart</h4>{" "}
              <h4 style={{ marginLeft: "15px", marginTop: "15px" }}>
                <img src={Ellipse3} className="ellipse3" alt="ellipse3" />
              </h4>
              <h4 className="hospital">St. John's Hospital</h4>
            </div>
            <div className="profile_text">
              Dr. Jones is one of the best doctors in St. John's Hospital
              Hospital. He has saved more than 1000 patients in the past 3
              years. He has also received many awards from domestic and abroad
              as the best doctors. He is available on a private or schedule.
            </div>
            <div className="profile_contact">
              <div className="profile_message">
                  <img src={Message} className="message_button" alt="message"/>
              </div>
              <div className="profile_appointment">
                  <img src={Appointment} className="appointment_button" alt="appointment"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctorslogs;
