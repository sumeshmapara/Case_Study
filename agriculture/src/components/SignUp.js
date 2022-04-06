import { Button } from "reactstrap";
import React, { useState } from "react";


import axios from "axios";
import { Link} from "react-router-dom";
import "./App.css";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmitt = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const handleData = {
      username,
      password,
      role,
    };
    const { data } = await axios.post(
      "http://localhost:8682/subs",
      handleData,
      config
    );
    

    console.log(data);
  };

  return (
    <>
      <div className="sumesh">
          <div className="outer">
          <div className="inner">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Enter username" 
                    onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                  <br/>
                <div className="form-group">
                    <label>Select Role</label>
                    <select onChange={(e)=>setRole(e.target.value)}>
                      <option defaultValue>--Select--</option>
                      <option value="farmer">FARMER</option>
                      <option value="admin">ADMIN</option>
                      <option value="dealer">DEALER</option>
                    </select>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-block" onClick={handleSubmitt} >Register</button>
              <p className="forgot-password text-right">Have an account?  <Link to="/login">Login Here</Link></p>
              {/* <p className="forgot-password text-right">For Admin  <Link to="/admin">Access Here</Link></p> */}
            </form>
           
          </div>
          </div>
          </div>
          
    </>
  );
};

export default SignUp;
