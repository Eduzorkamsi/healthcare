import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Logo from "./assets/icons/logo152.svg";
import Icon1 from "./assets/icons/piechart.svg";
import Icon2 from "./assets/icons/stethoscope1.svg";
import Icon3 from "./assets/icons/doctor2.svg";
import Icon4 from "./assets/icons/nurse2.svg";
import Icon5 from "./assets/icons/patients.svg";
import Icon6 from "./assets/icons/creditcard.svg";
import Icon7 from "./assets/icons/help.svg";
import Department from "./components/departments";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Doctors from "./components/doctors"
import Doctorslogs from "./components/doctorlogs"
import Patients from "./components/patients"


// import CreditCard from "./assets/creditcard"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard/>,
  },
  {
    path: "/appointments",
    main: () => <Appointments/>,
  },
  {
    path: "/doctors",
    main: () => <Doctors/>,
  },
  {
    path: "/departments",
    exact: true,
    main: () => <Department/>,
  },
  {
    path: "/patients",
    main: () => <Patients/>,
  },
  {
    path: "/payments",
    main: () => <h2>Payments</h2>,
  },
  {
    path: "/help",
    main: () => <h2>Help</h2>,
  },
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
       className="main_sidebar"
          style={{
            padding: "24px",
            width: "20%",
            background: "#FFFFFF",
            height: "100vh",
          }}
          
        >
          <img src={Logo} className="App-logo" alt="logo" />
          
          <h3 className="App-desc">MEDICINE</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="navli">
              <NavLink
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon1} className="App-Icon" alt="Icon" />
                Dashboard
              </NavLink>
            </li>
            <li className="navli">
              <NavLink
                to="/appointments"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon2} className="App-Icon" alt="Icon" />
                Appointments
              </NavLink>
            </li>
            <li className="navli">
              <NavLink
                to="/doctors"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon3} className="App-Icon" alt="Icon" />
                Doctors
              </NavLink>
            </li>
            <li className="navli">
              <NavLink
                to="/departments"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon4} className="App-Icon" alt="Icon" />
                Departments
              </NavLink>
            </li>
            <li className="navli">
              <NavLink
                to="/patients"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon5} className="App-Icon" alt="Icon" />
                Patients
              </NavLink>
            </li>
            <li className="navli">
              {/* <CreditCard active={/payments/i.test(path)} /> */}
              <NavLink
                to="/payments"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon6} className="App-Icon" alt="Icon" />
                Payments
              </NavLink>
            </li>
            <div className="border-line"></div>
            <li className="navli">
              <Link
                to="/help"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#336CFB",
                }}
              >
                <img src={Icon7} className="App-Icon" alt="Icon" />
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-divider"></div>
        <div className="main_page_div"
          style={{
            flex: 1,
            paddingLeft: "10px",
            paddingTop: "10px",
            background: "white",
            height: "300vh",
          }}
        >
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
             <Route path="/doctorslogs" component={Doctorslogs} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
