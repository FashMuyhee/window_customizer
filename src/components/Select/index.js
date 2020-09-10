import React, { useState } from "react";
import "./style.css";

const Select = ({ data, onChange }) => {
  const [select, setSelect] = useState("");

  const hanldeChange = (e) => {
    // e.preventDefault();
    for (const index of data) {
      if (index.name === e.target.value) {
        onChange(index);
      }
    }
    setSelect(e.target.value);
  };
  return (
    <div className="select">
      {data.map((index) => {
        return (
          <label key={index.id}>
            <input
              key={index.id}
              type="radio"
              value={index.name}
              name={index.name.split(" ")[0]}
              onChange={hanldeChange}
              checked={select === index.name}
            />
            {index.name}
          </label>
        );
      })}
    </div>
  );
};

export default Select;
