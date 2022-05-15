import React from "react";
import { Link } from "react-router-dom";

const Missing = ({ clearH2 }) => {
  return (
    <main className="main">
      <h1>Can't find this path!</h1>;
      <button onClick={clearH2}>
        <Link to="/">Back to Home!</Link>
      </button>
    </main>
  );
};

export default Missing;
