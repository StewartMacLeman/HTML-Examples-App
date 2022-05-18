import React from "react";
import "./misc.css";

const MISC_5 = () => {
const htmlCode = 
`<p>
<cite>The Scream</cite> by Edward Munch. Painted in 1893.
</p>`;
const cssCode = 
`cite {
  text-decoration: underline;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <p className="vertMargin"><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_5;
