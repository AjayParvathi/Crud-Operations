import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    </div>
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Update"
                    ></input>
                  </form>
                </div>
                {/*<div className="col-md-2">
                    <Link to=" " className="btn btn-success mb-2 mx-2"><i className="bi bi-pencil-fill"></i>Edit</Link>
                    <Link to=" " className="btn btn-primary mb-2 mx-2">view</Link>
                    <Link to=" " className="btn btn-danger mb-2 mx-2">Delete</Link>
  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditContact;
