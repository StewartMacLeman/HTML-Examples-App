import React from "react";
import "./misc.css";

const MISC_6 = () => {
const htmlCode = 
`<p>This text reads from the left to right!</p>
<bdo dir="rtl">This text will be reversed!</bdo>`;
const cssCode = 
`bdo {
  font-size: 2rem;
  font-family: verdana, helvetica, sans-serif;
  text-align: center;
  margin: .25rem auto;
  padding: .15rem;
  display: block;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <p className="vertMargin">This text reads from the left to right!</p>
      <bdo dir="rtl">This text will be reversed!</bdo>
      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_6;
