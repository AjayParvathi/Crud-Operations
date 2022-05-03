import React, { useEffect, useState } from "react";
import axios from "./API/PostingApi";

const REGISTER_URL = "/credentials";
const HomeAccount = () => {
  const [display, setDisplay] = useState([]);
  const [load, setload]=useState(true)
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(REGISTER_URL);
      const data = JSON.stringify(response);
      setDisplay(response?.data);
      console.log(response);
      console.log(data);
      // setload(false)
    };
    fetchUser();
  }, []);

  const names = localStorage.getItem("name").replace(/"/g, "");

  return (
    <div>
      <h2 className="text-center">welcome {names}</h2>
      {load ? (
        <div>
      {display.map((details, index) => (
        <ul>
          <li scope="row">{index + 1}</li>
          <li>{details.names}</li>
          <li>{details.emails}</li>
          <li>{details.numbers}</li>
        </ul>
      ))}
      </div>
      ) : ( <p>loading </p>)}
   
    </div>
  );
};

export default HomeAccount;
