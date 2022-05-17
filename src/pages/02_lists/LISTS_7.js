import React from "react";
import "./lists.css";

const LISTS_7 = () => {
const htmlCode = 
`<dl>
  <dt>Fruit</dt>
    <dd>Apples</dd>
    <dd>Oranges</dd>

  <dt>Vegetables</dt>
    <dd>Carrots</dd>
    <dd>Parsnips</dd>
</dl>`;
const cssCode =
`dl dt, dl dd {
  text-align: left;
}
dt {
  font-weight: bold;
  text-decoration: underline;
}
dd {
  padding-left: 2rem;
}`
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <dl className="list">
        <dt>Fruit</dt>
          <dd>Apples</dd>
          <dd>Oranges</dd>
        <dt>Vegetables</dt>
          <dd>Carrots</dd>
          <dd>Parsnips</dd>
      </dl>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code>{cssCode}</code></pre></div>
    </main>
  );
};

export default LISTS_7;
