import React, { Component } from "react";
import { LIST, LOCATION, NOOFPRODUCTS } from "./ProductDeal";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }

  calPay() {
    let total = this.state.total;

    if (LIST === "Vegetables" && LOCATION === "Mumbai") {
      // this.state.total = NOOFTICKETS * 370;
      this.setState({ total: NOOFPRODUCTS * 370 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } else if (LIST === "Mumbai" && LOCATION === "Vegetables") {
      this.setState({ total: NOOFPRODUCTS * 50 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  render() {
    return <div />;
  }
}