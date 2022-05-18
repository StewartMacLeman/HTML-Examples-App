import React from "react";
import "./misc.css";

const MISC_7 = () => {
const htmlCode = 
`<p>
  The letters 
  <abbr title="Command Line Interface">CLI</abbr> 
  stand for the Command Line Interface
</p>`;
const cssCode = 
`abbr {
  font-weight: bold;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <p className="vertMargin">The letters <abbr title="Command Line Interface">CLI</abbr> stand for the Command Line Interface</p>
      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_7;
