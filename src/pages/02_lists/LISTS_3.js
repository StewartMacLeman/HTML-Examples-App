import React from "react";
import "./lists.css";

const LISTS_3 = () => {
const htmlCode = 
`<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>`;
const cssCode =
`ul li {
  list-style-type: none; 
}`
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <ul className="list listStyle" >
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
      </ul>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code>{cssCode}</code></pre></div>
    </main>
  );
};

export default LISTS_3;
