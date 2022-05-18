import React from "react";
import "./forms.css";

const FORMS_8 = () => {
const htmlCode = 
`<form>
  <div>
    <input type="radio" id="apples" 
    name="fruit" value="apples">
    <label for="apples">Apples</label>
  </div>

  <div>
    <input type="radio" id="pears" 
    name="fruit" value="pears">
    <label for="pears">Pears</label>
  </div>

  <div>
    <input type="radio" id="bananas" 
    name="fruit" value="bananas">
    <label for="bananas">Bananas</label>
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer radio">
          <input type="radio" id="apples" name="fruit" value="apples" />
          <label htmlFor="apples">Apples</label>
        </div>
        <div className="inputContainer radio">
          <input type="radio" id="pears" name="fruit" value="pears" />
          <label htmlFor="pears">Pears</label>
        </div>
        <div className="inputContainer radio">
          <input type="radio" id="bananas" name="fruit" value="bananas" />
          <label htmlFor="bananas">Bananas</label>
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_8;
