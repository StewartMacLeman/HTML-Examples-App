import React from "react";
import "./misc.css";

const MISC_2 = () => {
const htmlCode = 
`<p>
  An example using the <mark>mark tag</mark>.
</p>`;
const cssCode = 
`mark {
  text-decoration: underline;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <p className="vertMargin">An example using the <mark>mark tag</mark>.</p>

      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code>{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_2;
