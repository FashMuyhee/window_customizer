import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import { hinges as hinge_data } from "../model/data";
import { AppContext } from "../AppContext";
import Select from "../components/Select";
import { Link, useLocation } from "react-router-dom";

let new_total = 0;
const Hinge = () => {
  const [app_state, setAppState] = useContext(AppContext);
  const [state, setState] = useState({});
  const { hinge, total } = app_state;
  const handleChange = (value) => {
    setState(value);
    new_total = total + value.price;
    setAppState({ ...app_state, hinge: value.name });
    console.log(app_state);
  };

  const param = useLocation();

  useEffect(
    () => {
      if (hinge === "hinge_1") {
        setState(hinge_data[0]);
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
          <img src={state.asset} alt={state.name} className="hinge" />
        </div>
        <div className="custom_options">
          <Select data={hinge_data} onChange={handleChange} />
          <Link to={{ pathname: "/final", total: new_total }}>
            Submit Customizations
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hinge;
