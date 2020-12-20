import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "../styles/patients.css";
import BioData from "./BioData";
import ContactInformation from "./ContactInformation";
import HealthInformation from "./HealthInformation";
import PatientVitals from "./PatientVitals"
import Allergies from "./Allergies"
import SocialDetails from "./SocialDetails"
import SystemReview from "./SystemReview" 


const routes = [
  {
    path: "/BioData",
    exact: true,
    main: () => <BioData/>
  },
  {
    path: "/ContactInformation",
    main: () => <ContactInformation/>
  },
  {
    path: "/HealthInformation",
    main: () => <HealthInformation/>
  },
  {
    path: "/PatientVitals",
    main: () => <PatientVitals/>
  },
  {
    path: "/Allergies",
    main: () => <Allergies/>
  },
  {
    path: "/SocialDetails",
    main: () => <SocialDetails/>
  },
  {
    path: "/SystemReview",
    main: () => <SystemReview/>
  },

];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "24px",
            width: "30%",
            background: "#FFFFFF",
            height: "100vh"
          }}
        >
            <h3 className="patient_record_title">Patient Clinical Record</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="patient_nav">
              <NavLink to="/BioData"
               activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Bio Data</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/ContactInformation"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Contact Information</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/HealthInformation"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Health Information</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/PatientVitals"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Patient Vitals</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/Allergies"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Allergies</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/SocialDetails"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >Social Details</NavLink>
            </li>
            <li className="patient_nav">
              <NavLink to="/SystemReview"
              activeStyle={{
                fontWeight: "bold",
                color: "#336CFB",
              }}
            >System Review</NavLink>
            </li>
          </ul>
        </div>
        <div className="border-divider"></div>
        <div className="patient_page_div" 
        style={{ 
            flex: 1, 
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "0px",
            background: "#e5e5e5",
            height: "300vh", 
            }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
