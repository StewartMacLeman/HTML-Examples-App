import React from "react";
import "./forms.css";

const FORMS_3 = () => {
const htmlCode = 
`<form>
  <div>
    <label for="f_name">First Name:</label>
    <input 
    type="text"
    id="f_name" 
    name="f_name"
    value="Bobby" >
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer">
          <label htmlFor="f_name">First Name:</label>
          <input type="text" id="f_name" name="f_name" value="Bobby"
          readOnly={true} />
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_3;
