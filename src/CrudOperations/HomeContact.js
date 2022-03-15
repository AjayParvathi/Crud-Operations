import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  const [phone, setPhone] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    User();
  }, []);

  const User = async () => {
    const result = await axios.get("http://localhost:8000/data");
    setPhone(result.data);
  };
  const deleteId = async (id) => {
    const result = await axios.delete(`http://localhost:8000/data/${id}`);
    User();
  };
  // filter

  const filterPhone = phone
    .filter(({ name, mobileNumber, email }) => {
      return (
        name.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
        mobileNumber.indexOf(search) >= 0 ||
        email.indexOf(search) >= 0
      );
    })
    .map((phone, index) => {
      return (
        <div key={phone.id}>
          <div className="row my-3 align-item-center bg-light d-flex">
            <div className="col-sm-3 ">
              <p className="h5">
                {index + 1}: {phone.name}
              </p>
            </div>
            <div className="col-sm-3 ">{phone.email}</div>

            <div className="col-sm-3 ">{phone.mobileNumber}</div>
            <div className="col-sm-3 my-2 my-2">
              <Link to={`/EditContact/${phone.id}`} className="btn btn-primary">
                <i className="far fa-edit"></i>
              </Link>
              <Link
                to={`/ViewContact/${phone.id}`}
                className="btn btn-success mx-2"
              >
                <i className="fas fa-eye"></i>
              </Link>
              <Link
                to=" "
                className="btn btn-danger "
                onClick={() => deleteId(phone.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  // filter end

  return (
    <div>
      <div className="container">
        <div className="Creat-contact my-2">
          <p className="h4">
            Create Contact
            <Link to="/CreatContact" className="btn btn-success mx-2">
              <i class="fas fa-phone-plus"></i>
            </Link>
          </p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search contact"
        />

        <div className="conatiner">
          <div>{filterPhone}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
