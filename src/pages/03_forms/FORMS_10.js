import React from "react";
import "./forms.css";

const FORMS_10 = () => {
const htmlCode = 
`<form>
  <div>
    <textarea
    cols="30"
    rows="5"
    placeholder="Type here..."
    ></textarea>
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer">
          <textarea
          cols="30"
          rows="5"
          placeholder="Type here..."
          ></textarea>
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_10;
