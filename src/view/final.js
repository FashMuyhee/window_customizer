import React, { useEffect, useContext } from "react";
import "./styles.css";
import { AppContext } from "../AppContext";
import { useLocation } from "react-router-dom";

const Final = () => {
  const [app_state, setAppState] = useContext(AppContext);

  const param = useLocation();

  useEffect(
    () => {
      console.log(param.total);
      setAppState({ ...app_state, total: param.total });
    },
    [param]
  );
  return (
    <>
      <h2>Final View</h2>
      <div className="container">
        <div className="final">
          <p>
            Customer Jane Done your Customization are Window of type
            {app_state.window} with handle type {app_state.handle} and hinge
            {app_state.hinge}
          </p>
          <p>Total Cost ${app_state.total}</p>
        </div>
      </div>
    </>
  );
};

export default Final;
