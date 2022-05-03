import React, { useEffect, useRef, useState } from "react";
import LoginAccount from "./LoginAccount";
import "../Credentials/Creditionals.css";
import axios from "./API/PostingApi";


const REGISTER_URL = "/credentials";

const CreatAccount = () => {
  const [names, setName] = useState("");
  const [numbers, setNumber] = useState("");
  const [emails, setEmail] = useState("");
  const [checks, setCheck] = useState();
  const [passwords, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  // const [nav, setNav] = useState(true);

  const [buttons, setButton] = useState(true);
  const change = (e) => {
    setCheck({ ...checks, [e.target.name]: e.target.value });
    // setButton(false)
    isChecked();
    // isCheck();
  };

  const isChecked = () => {
    if (!checks) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // const isCheck = () => {
  //   checks ? setButton(true) : setButton(false);
  // };

  const focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
    
  }, []);

  //  onSUBMIT

  const submit = async (e) => {
    e.preventDefault();
    if (
      names === "" ||
      numbers === "" ||
      emails === "" ||
      passwords === "" ||
      checks === ""
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("name", JSON.stringify(names));
      localStorage.setItem("email", JSON.stringify(emails));
      localStorage.setItem("password", JSON.stringify(passwords));
      console.log("saved in local storage");
      setLogin(!login);
      // setNav(false);
      posting();
    }
  };

  // json API from another component

  const posting = async () => {
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ names, numbers, emails, passwords }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      // console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      // iam trying store the token into local storage but it not work
      // const token = response?.accessToken;
      // localStorage.setItem("Token", JSON.stringify(token));
    } catch (err) {
      console.log("error server");
    }
  };

  const click = () => {
    setLogin(!login);
  };

  return (
    <div>
      {/* {nav && <ContactNavBar></ContactNavBar>} */}
      {login ? (
        <div className="image img-flude">
          <div className="overlay"></div>
          <form className="col-sm-4 m-auto" onSubmit={submit}>
            <h3 className="text-center">SignUp</h3>
            <div className="form-group ">
              <input
                ref={focusInput}
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="number"
                placeholder="Enter Phone Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={change}
              />
              <span class="checkmark"></span>
              <label className="form-check-label">Check me out</label>
            </div>
            {flag && <p className="text-danger">Please fill all</p>}
            <div className="text-center
             d-flex flex-column">
              {buttons ? (
                <button
                  type="submit"
                  className="btn btn-primary btn-disabled singUp_btn"
                  disabled
                  style={{ cursor: "not-allowed" }}
                >
                  Submit
                </button>
              ) : (
                <button type="submit" className="btn btn-primary singUp_btn">
                  Submit
                </button>
              )}

              <p className="login" onClick={click}>
                have a account {setLogin}
              </p>
              
            </div>
            
          </form>
          
        </div>
      ) : (
        <LoginAccount />
      )}
    </div>
  );
};

export default CreatAccount;
