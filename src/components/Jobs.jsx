import React, { Component } from "react";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { NavLink } from "react-router-dom";

class Jobs extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    try {
      const { data } = await http.get(apiUrl + "/job");
      this.setState({ data });
    } catch (ex) {}
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="animated lightSpeedIn" style={{ marginTop: 100 }}>
          List of jobs
        </h1>
        {this.state.data.length === 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div className="row">
          {this.state.data.map(job => (
            <div key={job._id} className="card m-3">
              <div className="card-body">
                <h5 className="card-title">{job.Title}</h5>
                <p className="card-text">{job.Description}</p>
                <hr />
                <div className="row">
                  <div className="col">{"Price: " + job.Rate + "$/hour"}</div>
                  <div className="col">{"Email: " + job.Email}</div>
                </div>
                <hr />
                <NavLink to="/jobs" className="btn btn-primary">
                  See more
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
