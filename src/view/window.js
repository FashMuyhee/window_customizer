import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import { window as window_data } from "../model/data";
import { AppContext } from "../AppContext";
import Select from "../components/Select";
import { Link } from "react-router-dom";

let new_total = 0;
const Window = () => {
  const [app_state, setAppState] = useContext(AppContext);
  const [state, setState] = useState({});
  const { window, } = app_state;
  const handleChange = (value) => {
    setState(value);
    new_total = value.price;
    setAppState({ ...app_state, window: value.name });
    console.log(app_state);
  };
  console.log(new_total);
  useEffect(
    () => {
      if (window === "window_1") {
        setState(window_data[0]);
      }
    },
    [window]
  );
  return (
    <>
      <h2>Window Panel</h2>
      <div className="container">
        <div className="view">
          <img
            src={state.asset ? state.asset : require("../img/window_1.jpeg")}
            className="window"
            alt={state.name}
          />
        </div>
        <div className="custom_options">
          <Select data={window_data} onChange={handleChange} />
          <Link to={{ pathname: "/handle", total: new_total }}>To Handle</Link>
        </div>
      </div>
    </>
  );
};

export default Window;
