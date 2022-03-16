import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  // alert(id)
  const [phone, setPhone] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const { name, email, mobileNumber } = phone;
  const ChangeValues = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    LoadUser();
  }, []);
  const enterValues = async (e) => {
    e.preventDefault();
    if (
      mobileNumber.charAt(0) != 9 &&
      mobileNumber.charAt(0) != 8 &&
      mobileNumber.charAt(0) != 7
    ) {
      // alert("Number Should start with 7,8,9");
      document.getElementById("number").innerHTML="**Number Should start with 7,8,9**"
      return;
    }
    if (mobileNumber.length < 10 || mobileNumber.length > 10) {
      // alert("number must be 10 digits");
      document.getElementById("number").innerHTML="**number must be 10 digits**"
      return;
    }
    else {
      navigate("/");
    }
    await axios.put(`http://localhost:8000/data/${id}`, phone);
    navigate("/");
  };
  const LoadUser = async (e) => {
    const result = await axios.get(`http://localhost:8000/data/${id}`);
    console.log(result);
    setPhone(result.data);
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="grid">
            <div className="Creat-contact my-2">
              <p className="h4">Edit Contact</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row text-center">
                <div className="col-md-6">
                  <form onSubmit={(e) => enterValues(e)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={(e) => ChangeValues(e)}
                      />

                      <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={(e) => ChangeValues(e)}
                      />

                      <input
                        type="number"
                        className="form-control mb-2"
                        placeholder="mobileNumber"
                        name="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => ChangeValues(e)}
                      />
                      <p id="number" style={{color:"red", fontSize:10}}></p>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Update"
                    ></input>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditContact;