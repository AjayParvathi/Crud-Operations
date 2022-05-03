import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewContact = () => {
  const { id } = useParams();

  const [phone, setPhone] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });

  useEffect(() => {
    LoadUser();
  }, []);
  const LoadUser = async () => {
    const result = await axios.get(`http://localhost:7000/data/${id}`);
    console.log(result);
    setPhone(result.data);
  };

  // const LoadUser = async () => {
  //   const res = await axios.get(`http://localhost:8000/data/${id}`);
  //   console.log(res.data);
  //   setPhone(res.data);
  // };
  return (
    <div>
      {/* <div className="container">
        <ul className="nav justify-content-center|justify-content-end">
       
          <li>name:{phone.name}</li>
          <li>email:{phone.email}</li>
          <li>MobileNumber:{phone.mobileNumber}</li>
        
        </ul>
        <Link to="/" className="btn btn-primary">
        <i className="fas fa-long-arrow-alt-left"></i>
        </Link>
       </div> */}

      <div className="container">
        <div className="col-sm-5 text-center my-5">
        <h2>view contact</h2>
          <div className="card">
            <div className="card-header h3 p-3 bg-info">{phone.name}</div>
            <div className="card-text p-3 bg-warning">
            Email<p className="h5 ">  {phone.email}</p>
              mobileNumber<p className="h5 "> {phone.mobileNumber}</p>
            </div>
            <div className="card-footer bg-info">
            <Link to="/" className="btn btn-primary btn-block">
        Back
        </Link>
            </div>
          </div>
        </div>
        {/* <Link to="/" className="btn btn-primary">
        <i className="fas fa-long-arrow-alt-left"></i>
        </Link> */}
      </div>
    </div>
  );
};

export default ViewContact;
