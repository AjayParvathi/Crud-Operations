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

  const [number, setNumber] = useState("");
  const { name, email, mobileNumber } = phone;
  const ChangeValues = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  };
  const enterValues = async (e) => {
    e.preventDefault();

    if (
      mobileNumber.charAt(0) != 9 &&
      mobileNumber.charAt(0) != 8 &&
      mobileNumber.charAt(0) != 7
    ) {
      alert("Number Should start with 7,8,9");
      return;
    }
    if (mobileNumber.length < 10 || mobileNumber.length > 10) {
      alert("number must be 10 digits");
      return;
    }
    else {
      navigate("/");
    }

    await axios.post("http://localhost:8000/data", phone);
    navigate("/");
  };
  // const handleChange =async (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   setNumber(value);
  // };
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
                type="text"
                className="form-control"
                placeholder="mobileNumber"
                name="mobileNumber"
                value={number}
                onChange={(e) => ChangeValues(e)}
                required
              />
              <p id="number"></p>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success " value="save" />
              <Link to="/" className="btn btn-danger align-center mx-2">
                cancel
              </Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
