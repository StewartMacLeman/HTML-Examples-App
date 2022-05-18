import React from "react";
import "./misc.css";

const MISC_4 = () => {
const htmlCode = 
`<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The
world's leading conservation organization, WWF works in 100 countries
and is supported by 1.2 million members in the United States and close
to 5 million globally.
</blockquote>`;
const cssCode = 
`blockquote {
  font-size: 1.5rem;
  font-family: verdana, helvetica, sans-serif;
  text-align: center;
  margin: .25rem auto;
  padding: .15rem;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <blockquote className="vertMargin" cite="http://www.worldwildlife.org/who/index.html">
          For 50 years, WWF has been protecting the future of nature. The
          world's leading conservation organization, WWF works in 100 countries
          and is supported by 1.2 million members in the United States and close
          to 5 million globally.
      </blockquote>
      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default MISC_4;
