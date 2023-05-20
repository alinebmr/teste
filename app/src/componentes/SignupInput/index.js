import React from "react";
import "./styles.css";

const SignupInput = (props) => {
  return (
    <div className="signupInput">
      <label>{props.label}</label>
      <input onChange={props.onChange} value={props.value} type={props.type} />
    </div>
  );
};

export default SignupInput;