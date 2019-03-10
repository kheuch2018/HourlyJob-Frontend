import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import PublishJob from "./components/PublishJob";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Switch>
            <Route path="/jobs" component={Jobs} />
            <Route path="/publish-job" component={PublishJob} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
