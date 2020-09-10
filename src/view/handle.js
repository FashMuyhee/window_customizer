import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import { handles as handle_data } from "../model/data";
import { AppContext } from "../AppContext";
import Select from "../components/Select";
import { Link, useLocation } from "react-router-dom";

let new_total = 0;
const Handle = () => {
  const [app_state, setAppState] = useContext(AppContext);
  const [state, setState] = useState({});
  const { handle, total } = app_state;

  const handleChange = (value) => {
    setState(value);
    new_total = total + value.price;
    setAppState({ ...app_state, handle: value.name });
    console.log(app_state);
  };

  const param = useLocation();
  useEffect(
    () => {
      if (handle === "handle_1") {
        setState(handle_data[0]);
      }
      console.log(param.total);
      setAppState({ ...app_state, total: param.total });
    },
    [param]
  );

  return (
    <>
      <h2>Handle Panel</h2>
      <div className="container">
        <div className="view">
          <img src={state.asset} className="handle" alt={state.name} />
        </div>
        <div className="custom_options">
          <Select data={handle_data} onChange={handleChange} />
          <Link to={{ pathname: "/hinge", total: new_total }}>To Hinge </Link>
        </div>
      </div>
    </>
  );
};

export default Handle;
