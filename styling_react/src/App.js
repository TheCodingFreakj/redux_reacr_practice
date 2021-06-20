import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPosts from "./components/blogposts";
import Navigation from "./components/mainnav";
import StyledComponents2 from "./components/StyledComponents";
import Cssmodule from "./components/cssmodule";
const App = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/objectVariable" exact>
            <BlogPosts />
          </Route>

          <Route path="/styledcomponents2" exact>
            <StyledComponents2 />
          </Route>

          <Route path="/cssmodule" exact>
            <Cssmodule />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
