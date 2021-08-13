import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import StudentRegister from "./components/Register/register";
import AluminRegister from "./components/Register/aluminiregister";
import Login from "./components/Login/login";
import AluminiLogin from "./components/Login/aluminilogin";
// get our fontawesome imports
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawer from "./components/Navigation/sidedrawer";
import MobileNavlinks from "./components/Navigation/MobileNavlinks";
import StudentProfile from "./components/Profiles/student";
import AluminiProfile from "./components/Profiles/alumini";
import "./App.css";
const App = () => {
  const [draweropen, setdraweropen] = React.useState(false);
  const openmenu = () => {
    setdraweropen(true);
  };

  const closemenu = () => {
    setdraweropen(false);
  };
  return (
    <>
      <div className="App">
        <Router>
          {draweropen && (
            <SideDrawer closemenu={closemenu}>
              <nav className="monile_nav">
                <MobileNavlinks />
              </nav>
            </SideDrawer>
          )}
          <div className="navbar">
            <button className="main-nav-menu-button" onClick={openmenu}>
              <FontAwesomeIcon icon={faAlignJustify} />
            </button>
            <nav className="main_nav">
              <Navlinks />
            </nav>
          </div>
          <Switch>
            <>
              <Route path="/student-register" exact>
                <StudentRegister />
              </Route>

              <Route path="/alumini-register" exact>
                <AluminRegister />
              </Route>

              <Route path="/student-login" exact>
                <Login />
              </Route>

              <Route path="/alumini-login" exact>
                <AluminiLogin />
              </Route>

              <Route path="/alumini-profile" exact>
                <StudentProfile />
              </Route>

              <Route path="/student-profile" exact>
                <AluminiProfile />
              </Route>
            </>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
