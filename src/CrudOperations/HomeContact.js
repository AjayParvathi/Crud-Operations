import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  const [phone, setPhone] = useState([]);

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
        {/*<div className="col-sm-12 pt-3">
          <table className="table table-shadow table-responsive">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>MOBILE NUMBER</th>
                <th>OPTIONS</th>
              </tr>
            </thead>
            <tbody>
              {phone.map((phone, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{phone.name}</td>
                  <td>{phone.email}</td>
                  <td>{phone.mobileNumber}</td>
                  <td>
                    <Link
                      to={`/EditContact/${phone.id}`}
                      className="btn btn-primary"
                    >
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
              </div>*/}
        <div className="conatiner">
          {phone.map((phone, index) => (
            <div className="row my-3 align-item-center bg-light d-flex">
              <div className="col-sm-3 ">
                <p className="h5">
                  {index + 1}: {phone.name}
                </p>
              </div>
              <div className="col-sm-3 ">{phone.email}</div>

              <div className="col-sm-3 ">{phone.mobileNumber}</div>
              <div className="col-sm-3 my-2 my-2">
                <Link
                  to={`/EditContact/${phone.id}`}
                  className="btn btn-primary"
                >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
