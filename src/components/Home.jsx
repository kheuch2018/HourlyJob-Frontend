import React, { Component } from "react";
import Carousel from "./commons/Carousel";
import { NavLink } from "react-router-dom";

class Home extends Component {
  btnStyle = {
    position: "relative",
    top: 200,
    textAlign: "center"
  };
  render() {
    return (
      <div>
        <div style={this.btnStyle}>
          <h1 className="animated bounceInLeft">Welcome to HourlyJob</h1>
          <NavLink to="/publish-job">
            <button className="btn btn-success m-3 btn-lg animated zoomIn">
              Post A Job
            </button>
          </NavLink>
          <NavLink to="/jobs">
            <button className="btn btn-danger m-3 btn-lg animated zoomIn">
              See Jobs
            </button>
          </NavLink>
          <h2 className="animated bounceInRight">
            Post your Job and hire freelancers
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
