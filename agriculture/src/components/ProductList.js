import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteIcon from "../../src/resources/trash-2 (1).svg";

const Product = props => (
  <tr>
    <td> {props.product.id} </td>
    <td> {props.product.list} </td>
    <td> {props.product.availability} </td>
    <td> {props.product.location} </td>
    </tr>
  
  
);
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { cropdetails: [] };
    this.successful=this.successful.bind(this);
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:8080/farmers/")
      .then(response => {
        this.setState({ cropdetails: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  productList() {
    return this.state.cropdetails.map(function(currentProduct, i) {
      return <Product product={currentProduct} key={i} />;
    });
  }

  successful(){

    this.props.history.push('/deal');

}

  render() {
    return (
      <div>
        <h3> Crop Details </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Id </th>
              <th> List </th>
              <th> Availability </th>
              <th> Location </th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>
        <button
                      className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect" onClick={()=>this.successful()}>
                      
                    
                      NEXT
                    </button>
                    <Link to="/deal"> </Link>
      </div>
    );
  }
}

export default ProductList;
