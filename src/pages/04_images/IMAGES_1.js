import React from "react";
import "./images.css";
import ImageOne from './images/travels_NZ.JPG'

const IMAGES_1 = () => {
const htmlCode = 
`<div>
  <img 
  src="/images/travels_NZ.JPG" 
  alt="A whale breaching the surface." 
  />
</div>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="imageContainer">
        <img 
        src={ImageOne}
        alt="A whale breaching the surface." 
        />
      </div>

      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
    </main>
  );
};

export default IMAGES_1;
