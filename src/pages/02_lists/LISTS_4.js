import React from "react";
import "./lists.css";

const LISTS_4 = () => {
const htmlCode = 
`<ul>
  <li>List A Item 1</li>
  <li>List A Item 2</li>
  <ul>
    <li>List B Item 1</li>
    <li>List B Item 2</li>
  </ul>
</ul>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <ul className="list" >
          <li>List A Item 1</li>
          <li>List A Item 2</li>
        <ul className="list">
          <li>List B Item 1</li>
          <li>List B Item 2</li>
        </ul>
      </ul>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
    </main>
  );
};

export default LISTS_4;
