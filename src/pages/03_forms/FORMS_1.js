import React from "react";
import "./forms.css";

const FORMS_1 = () => {
const htmlCode = 
`<form action="index.html" method="post">
  <div>
    <label for="f_name">First Name:</label>
    <input type="text" id="f_name" name="f_name">
  </div>

  <div>
    <label for="l_name">Last Name:</label>
    <input type="text" id="l_name" name="l_name">
  </div>

  <div>
    <input type="submit" value="Submit">
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer">
          <label htmlFor="f_name">First Name:</label>
          <input type="text" id="f_name" name="f_name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="l_name">Last Name:</label>
          <input type="text" id="l_name" name="l_name" />
        </div>
        <div className="inputContainer">
          <input type="submit" value="Submit" />
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_1;
