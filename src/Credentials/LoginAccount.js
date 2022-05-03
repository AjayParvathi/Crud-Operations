import React, { useState } from "react";
import HomeAccount from "./HomeAccount";

const LoginAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    let mail = localStorage.getItem("email").replace(/"/g, "");
    let pass = localStorage.getItem("password").replace(/"/g, "");
    if (!email || !password) {
      setFlag(true);
    } else if (email !== mail || password !== pass) {
      setFlag(true);
    } else {
      setFlag(false);
      setHome(!home);
      
    }
  };
  return (
    <div>
      {home ? (
        <form className="col-sm-4 m-auto" onSubmit={submit}>
          <h3 className="text-center">login</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {flag && (
            <alert className="text-danger">
              **Please enter valid creditionals**
            </alert>
          )}
          
          <div className="text-center m-auto">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <HomeAccount />
      )}
    </div>
  );
};

export default LoginAccount;