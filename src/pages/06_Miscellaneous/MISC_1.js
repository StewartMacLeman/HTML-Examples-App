import React from "react";
import "./misc.css";

const MISC_1 = () => {
const htmlCode = 
`<p>
  An example using the <del>del tag</del>.
</p>`;
const cssCode = 
`del {
  color: red;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <p className="vertMargin">An example using the <del>del tag</del>.</p>

      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code>{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_1;
