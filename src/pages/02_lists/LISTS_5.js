import React from "react";
import "./lists.css";

const LISTS_5 = () => {
const htmlCode = 
`<ol>
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ol>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <ol className="list">
          <li>List Item A</li>
          <li>List Item B</li>
          <li>List Item C</li>
      </ol>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
    </main>
  );
};

export default LISTS_5;
