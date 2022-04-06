import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//  import ProductList from "./ProductList";

//export the variable to access from other components

export const LIST = "LIST";
export const LOCATION = "LOCATION";
export const NOOFPRODUCTS = "NOOFPRODUCTS";

class ProductDeal extends Component {
  constructor(props) {
    super(props);

    this.checkList = this.checkList.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.checkProducts = this.checkProducts.bind(this);
    this.storeDetails = this.storeDetails.bind(this);

    //Equal the state to empty
    this.state = {
    
      
      list: "",
      location: "",
      noofproducts: ""
    };
  }
  

  //get the input data and store it on variable and
  //display the input data value in console

  //store the input data into states

  checkList(e) {
    var soList = document.getElementById("soList").value;
    this.setState({
      list: e.target.value
    });
    console.log("List : " + soList);
  }
  checkLocation(e) {
    var deList = document.getElementById("deList").value;
    this.setState({
      location: e.target.value
    });
    console.log("Location: " + deList);
  }
  checkProducts(e) {
    var products = document.getElementById("products").value;
    this.setState({
      noofproducts: e.target.value
    });
    console.log("No of Products : " + products);
  }

  //store the state value into variable
  //check if state is not equal to empty if not then save
  //that data into session storage
  storeDetails(e) {
    e.preventDefault();
  
   
    let list = this.state.list;
    let location = this.state.location;
    let noofproducts = this.state.noofproducts;

    //Validating the source, If validated store the data to sessionStorage.
    if (list === "") {
      alert("LIST cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/deal`);
    } else if (list !== "") {
      sessionStorage.setItem(LIST, list);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the destination, If validated store the data to sessionStorage.
    if (location === "") {
      alert("LOCATION cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/deal`);
    } else if (location !== "") {
      sessionStorage.setItem(LOCATION, location);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the nooftickets, If validated store the data to sessionStorage.
    if (noofproducts === "") {
      alert("NO OF PRODUCTS cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/deal`);
    } else if (noofproducts !== "") {
      sessionStorage.setItem(NOOFPRODUCTS, noofproducts);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }
  }

  render() {
    return (
      <Router>
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
                    Buy Crop Products Online{" "}
                  </strong>
                </h5>

                <div className="card-body px-lg-5">
                  <form
                    className="text-center"
                    style={{ color: "#757575" }}
                    onSubmit={this.storeDetails}
                    
                  >
                
                    <label> List : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="soList"
                      onChange={this.checkList}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Vegetables"> Vegetables </option>
                      <option value="Fruits"> Fruits </option>
                      <option value="Seeds"> Seeds </option>
                      <option value="Flowers"> Flowers </option>
                      <option value="Other"> Other </option>
                    </select>
                    <label> Location : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="deList"
                      onChange={this.checkLocation}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Mumbai"> Mumbai </option>
                      <option value="Pune"> Pune </option>
                      <option value="Punjab"> Punjab </option>
                      <option value="Delhi"> Delhi </option>
                      <option value="Ratnagiri"> Ratnagiri </option>
                    </select>

                    <label> No of Products : </label>
                    <input
                      type="text"
                      placeholder="No of products"
                      className="form-control mb-4"
                      id="products"
                      onChange={this.checkProducts}
                    />

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
      </Router>
    );
  }
}

export default ProductDeal;