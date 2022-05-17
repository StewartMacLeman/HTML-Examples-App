import React from "react";
import "./lists.css";

const LISTS_2 = () => {
const htmlCode = 
`<ul style="list-style-type: square">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <ul className="list" style={{listStyleType: "square"}} >
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
      </ul>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
    </main>
  );
};

export default LISTS_2;
