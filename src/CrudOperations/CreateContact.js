import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  let navigate = useNavigate();
  const [phone, setPhone] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const { name, email, mobileNumber } = phone;
  const ChangeValues = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };
  const enterValues = async (e) => {
    e.preventDefault();
    // if(name.length<=3){
    //   alert("please enater vaild name")
    // }
    // else if(mobileNumber.length<10 || mobileNumber.length >10){
    //   alert("enter vaild number")
    // }
    await axios.post("http://localhost:8000/data", phone);
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <div className="col-sm ">
          <p className="h3 mx-2 my-2">Create Contact</p>
          <form onSubmit={(e) => enterValues(e)} className="col-md-4 my-3">
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => ChangeValues(e)}
                required
                
                  
              />
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => ChangeValues(e)}
                required
              />
            </div>
            <div className="form-group ">
              <input
                type="number"
                className="form-control"
                placeholder="mobileNumber"
                name="mobileNumber"
                value={mobileNumber}
                onChange={(e) => ChangeValues(e)}
                required
              />
              
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success " value="save" />
              <Link to="/" className="btn btn-danger align-center mx-2">
                cancel
              </Link>
            </div>
            {/*
            <div className="form-group ">
              <Link to="/" className="btn btn-primary ">
                Back
              </Link>
              <Link to="/" className="btn btn-primary mx-2">
                Save
              </Link>
            </div>*/}
            
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default CreateContact;
