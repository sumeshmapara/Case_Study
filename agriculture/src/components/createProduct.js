import React, { Component } from "react";
import AdminNavigationBar from "./adminNavigationBar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class CreateProduct extends Component {
  state = {
    id: "",
    list: "",
    availability: "",
    location: "",
    isProductCreated: false
  };

  handleid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ id: value.toUpperCase() });
    }
  };


  handlelist = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ list: value.toUpperCase() });
    }
  };

  handleavailability = event => {
    const { value } = event.target;
    this.setState({ availability: value.toUpperCase() });
  };

  handlelocation = event => {
    const { value } = event.target;
    this.setState({ location: value.toUpperCase() });
  };



  handleSubmit = event => {
    event.preventDefault();

    const newProduct = {
      id: this.state.id,
      list: this.state.list,
      availability: this.state.availability,
      location: this.state.location,
    
    };

    axios
      .post(
        "http://localhost:8080/farmers/",
        newProduct
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Details created successfully");
    this.setState({
        id: "",
        list: "",
        availability: "",
        location: "",
    
      isProductCreated: true
    });
  };
  render() {
    if (this.state.isProductCreated) {
      return <Redirect to="/productlist" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Add Crop Details</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="productNumber">Id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="id"
                        onChange={this.handleid}
                        value={this.state.id}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="list">List</label>
                      <input
                        type="name"
                        className="form-control"
                        id="list"
                        onChange={this.handlelist}
                        value={this.state.list}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Availability</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handleavailability}
                        value={this.state.availability}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Location</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handlelocation}
                        value={this.state.location}
                        required
                      />
                    </div>
                  </div>
                  <br />
                
              
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createProduct"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Add Details
                    </button>
                    
                    <p>Delete Details?<Link to="/delProduct"> Click Here</Link></p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}