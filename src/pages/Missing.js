import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <>
    <h1>Can't find this path!</h1>;
    <button><Link to="/">Back to Home!</Link></button>
    </>
  ) 
};

export default Missing;
