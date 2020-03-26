import React from "react";

function Button(props) {
  return <div className={`button${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Button;