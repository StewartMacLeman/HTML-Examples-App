import React from "react";
import "./misc.css";

const MISC_3 = () => {
const htmlCode = 
`<p>
  WWF's goal is to:
  <q>Build a future where people live in harmony
   with nature.</q>
  We hope they succeed.
</p>`;
const cssCode = 
`q {
  font-style: italic;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <p className="vertMargin">
        WWF's goal is to:
          <q>Build a future where people live in harmony with nature.</q> We hope they succeed.</p>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_3;
