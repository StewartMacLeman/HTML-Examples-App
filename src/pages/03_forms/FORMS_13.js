import React from "react";
import "./forms.css";

const FORMS_13 = () => {
const htmlCode = 
`<form>
  <fieldset>
    <legend>Name Section</legend>
      <div>
        <label for="f_name">First Name:</label>
        <input type="text" id="f_name" 
        name="f_name">
      </div>
      <div>
        <label for="l_name">Last Name:</label>
        <input type="text" id="l_name" 
        name="l_name">
      </div>
  </fieldset>
  
  <fieldset>
    <legend>Address</legend>
      <div>
        <label for="street">Street:</label>
        <input type="text" id="street" 
        name="street">
      </div>
      <div>
        <label for="town">Town:</label>
        <input type="text" id="town" 
        name="town">
      </div>
      <div>
        <label for="postcode">Postcode:</label>
        <input type="text" id="postcode"
         name="postcode">
      </div>
  </fieldset>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend>Name Section</legend>
            <div className="inputContainer fieldset">
              <label htmlFor="f_name">First Name:</label>
              <input type="text" id="f_name" name="f_name"/>
            </div>
            <div className="inputContainer fieldset">
              <label htmlFor="l_name">Last Name:</label>
              <input type="text" id="l_name" name="l_name"/>
            </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
            <div className="inputContainer fieldset">
              <label htmlFor="street">Street:</label>
              <input type="text" id="street" name="street"/>
            </div>
            <div className="inputContainer fieldset">
              <label htmlFor="town">Town:</label>
              <input type="text" id="town" name="town"/>
            </div>
            <div className="inputContainer fieldset">
              <label htmlFor="postcode">Postcode:</label>
              <input type="text" id="postcode" name="postcode"/>
            </div>
        </fieldset>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_13;
