import React, { Component } from "react";


import {LIST, LOCATION, NOOFPRODUCTS } from "./ProductDeal";


export const TOTAL = "TOTAL";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",
   
      list: "",
      location: "",
      noofproducts: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //setting the state value to session storage value



    this.setState({ list: sessionStorage.getItem(LIST) });
    this.setState({ location: sessionStorage.getItem(LOCATION) });
    this.setState({ noofproducts: sessionStorage.getItem(NOOFPRODUCTS) });
    this.setState({ total: sessionStorage.getItem(NOOFPRODUCTS) * 340 });
    this.setState({
    });
    this.setState({
      total:
        sessionStorage.getItem(NOOFPRODUCTS) * 340 -
        sessionStorage.getItem(NOOFPRODUCTS) * 340 * (10 / 100)
    });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });

    let total = this.state.total;
    sessionStorage.setItem(TOTAL, total);
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/sbipg`);
    } else if (method === "mobile") {
      this.props.history.push(`/submitPaymentDetail`);
    }
    if(this.componentDidMount()){
      fetch("http://localhost:8085/payments/", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json",
          "Access-Control-Allow-Origin": "*"
          
        },
        "body": JSON.stringify({
          id: this.state.id,
          list: this.state.list,
          location: this.state.location,
          noofproducts: this.state.noofproducts,
        })
      })
      .then(response => response.json())
      .then(response => {
       alert("Your product is not deal")
      })
      .catch(err => {
        alert("Your product is successfully deal")
      });
    }

  }
  

  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " #0000FF " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h5>Your Details</h5>
                  <h6>
                    {" "}
                    List :{" "}
                    <input
                      type="text"
                      value={this.state.list}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />{" "}
                  </h6>
                  <h6>
                    {" "}
                    Location :{" "}
                    <input
                      type="text"
                      value={this.state.location}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>
                  <h6>
                    {" "}
                    No of Products :{" "}
                    <input
                      type="text"
                      value={this.state.noofproducts}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>{" "}
              
                  <h6>
                    {" "}
                    Your Total Bill :{" "}
                    <input
                      type="text"
                      value={this.state.total}
                      readOnly
                      style={{ backgroundColor: "#80aaff" }}
                    />
                  </h6>
                  Select the Payment Method
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card
                      
                    </label>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    NEXT
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;