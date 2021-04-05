import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RailwayDetails from "./RailwayDetails";

class Header extends Component {
  render() {
    return (
      <div>
       
          <Router>
          <nav class="navbar navbar-dark bg-dark">
            <Link className="" to="/AddTrainDetails">
             Add Train 
            </Link>
            </nav>
            <switch>
              <Route path="/AddTrainDetails">
                <RailwayDetails />
              </Route>
            </switch>
          </Router>
        
      </div>
    );
  }
}

export default Header;
