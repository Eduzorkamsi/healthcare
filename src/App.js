import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Logo from "./assets/icons/logo152.svg"

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/appointments",
    main: () => <h2>Appointments</h2>
  },
  {
    path: "/doctors",
    main: () => <h2>Doctors</h2>
  },
  {
    path: "/departments",
    exact: true,
    main: () => <h2>Departments</h2>
  },
  {
    path: "/patients",
    main: () => <h2>Patients</h2>
  },
  {
    path: "/payments",
    main: () => <h2>Payments</h2>
  },
  {
    path: "/help",
    main: () => <h2>Help</h2>
  }
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "24px",
            width: "20%",
            background: "#FFFFFF",
            height:"100vh"
          }}
        >
          <img src={Logo} className="App-logo" alt="logo" />
          <h3 className="App-desc">MEDICINE</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="navli">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="navli">
              <Link to="/appointments">Appointments</Link>
            </li>
            <li className="navli">
              <Link to="/doctors">Doctors</Link>
            </li>
            <li className="navli">
              <Link to="/departments">Departments</Link>
            </li>
            <li className="navli">
              <Link to="/patients">Patients</Link>
            </li>
            <li className="navli">
              <Link to="/payments">Payments</Link>
            </li>
            <li className="navli">
              <Link to="/help">Help</Link>
            </li>
          </ul>

        
        </div>

        <div style={{ flex: 1, padding: "10px", background:"#CACCCF", height:"100vh" }}>
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

