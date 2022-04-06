import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//importing the components
import ProductList from "./components/ProductList";
import HomeSlider from "./components/HomeSlider";
import ProductDeal from "./components/ProductDeal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PaymentMethod from "./components/PaymentMethod";
import PaytmPG from "./components/PaytmPG";
import SBIBankPG from "./components/SBIBankPG";
import ThankYouMessage from "./components/ThankYouMessage";
import adminSignIn from './components/adminSignIn';
import createProduct from './components/createProduct';
import deleteProduct from "./components/deleteProduct";
//importing the images



function App() {
  return (
    <Router>
      <div className="navImage">
        <a href="">
         
        </a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/productlist"
                className="nav-link"
                style={{ color: "white" }}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/signUp"
                className="nav-link"
                style={{ color: "white" }}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/deal"
                className="nav-link"
                style={{ color: " skyblue" }}
              >
                Welcome to CropDeal System
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/payment"
                className="nav-link"
                style={{ color: "white" }}
              >
                
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/adminSignIn"
                className="nav-link"
                style={{ color: "white" }}
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Switching between components */}
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/productlist" exact component={ProductList} />
        <Route path="/deal" exact component={ProductDeal} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        <Route path="/adminSignIn" exact component={adminSignIn} />
        <Route path="/addProduct" exact component={createProduct} />
        <Route path="/delProduct" exact component={deleteProduct} />

        
       
      </Switch>
      <div
        className="footer"
        style={{ backgroundColor: "blue", width: 1365, height: 60 }}
      >
      
      </div>
    </Router>
  );
}

export default App;
