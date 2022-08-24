import React from "react";

const ButtonFilter = (props) => {
  return (
    <button
      onClick={() => props.cartFilter(props.filter)}
      className={`filter_btn ${
        props.active === props.filter ? "active_btn" : ""
      }`}
    >
      {props.filter}
    </button>
  );
};

export default ButtonFilter;
