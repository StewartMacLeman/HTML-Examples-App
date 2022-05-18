import React from "react";
import "./images.css";

const IMAGES_2 = () => {
const htmlCode = 
`<div class="imageCont">
</div>`;
const cssCode = 
`.imageCont {
    margin: 1rem auto;
    width: 65%;
    height: 17rem;
    border: .15rem solid black;
    background-image: url("images/travels_NZ_2.JPG");
    background-size: cover;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="imageContainerTwo">
      </div>

      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default IMAGES_2;
