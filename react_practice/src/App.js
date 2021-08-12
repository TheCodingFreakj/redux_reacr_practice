import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navlinks from "./components/Navigation/navlinks";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
// get our fontawesome imports
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawer from "./components/Navigation/sidedrawer";
import MobileNavlinks from "./components/Navigation/MobileNavlinks";
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
              <Route path="/register" exact>
                <Register />
              </Route>

              <Route path="/login" exact>
                <Login />
              </Route>
            </>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
