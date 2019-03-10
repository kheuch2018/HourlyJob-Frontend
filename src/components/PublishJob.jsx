import React, { Component } from "react";
import Input from "./commons/Input";
import job from "../services/jobService";

class PublishJob extends Component {
  state = {
    Title: "",
    Description: "",
    Email: "",
    Rate: "",
    isPosted: false,
    isSubmitted: false,
    data: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.setState({ isSubmitted: true, isPosted: false });
      const { Description, Email, Rate, Title } = this.state;
      await job.publish({ Description, Email, Rate, Title });
      this.setState({ isPosted: true, isSubmitted: false });
    } catch (ex) {
      if (ex.response) {
        this.setState({ isSubmitted: false });
        console.log(ex.response.status);
      }
    }
  };

  myStyle = { textAlign: "center", marginTop: 100 };

  render() {
    return (
      <div style={this.myStyle}>
        <h1 className="animated bounceInDown">Publish a new Job !</h1>
        <div className="col-sm-4 offset-sm-4">
          {this.state.isPosted && (
            <div className="alert alert-success">
              Congrats! Job has been posted.
            </div>
          )}
          <form onSubmit={this.handleSubmit} className="form-group ">
            <Input
              name="Title"
              handleChange={this.handleChange}
              type="text"
              value={this.state.Title}
            />
            <textarea
              name="Description"
              placeholder="Job description..."
              className="form-control mt-3"
              onChange={this.handleChange}
              value={this.state.Description}
            />
            <Input
              name="Email"
              handleChange={this.handleChange}
              type="email"
              value={this.state.Email}
            />
            <div className="input-group mb-3 mt-3">
              <div className="input-group-prepend ">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.Rate}
                name="Rate"
                aria-label="Amount (to the nearest dollar)"
                placeholder="Rate..."
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>

            <input
              type="submit"
              value="Post Job"
              className="btn btn-info mt-3"
              disabled={this.state.isSubmitted}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default PublishJob;
