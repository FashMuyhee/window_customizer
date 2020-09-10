import React, { useContext } from "react";
import "../App.css";
import { AppContext } from "../AppContext";

const Navbar = () => {
  const [app_state] = useContext(AppContext);

  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <ul>
         <h3>Window Customizer</h3>
        </ul>
      </nav>
      <h3>Total : ${app_state.total}</h3>
    </header>
  );
};

export default Navbar;
