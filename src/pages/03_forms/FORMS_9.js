import React from "react";
import "./forms.css";

const FORMS_9 = () => {
const htmlCode = 
`<form>
  <div>
    <input type="checkbox" id="fruit_1" 
    name="fruit_1" value="apples">
    <label for="fruit_1">Apples</label>
  </div>

  <div>
    <input type="checkbox" id="fruit_2" 
    name="fruit_2" value="pears">
    <label for="fruit_2">Pears</label>
  </div>

  <div>
    <input type="checkbox" id="fruit_3" 
    name="fruit_3" value="bananas">
    <label for="fruit_3">Bananas</label>
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer checkbox">
          <input type="checkbox" id="fruit_1" name="fruit_1" value="apples" />
          <label htmlFor="fruit_1">Apples</label>
        </div>
        <div className="inputContainer checkbox">
          <input type="checkbox" id="fruit_2" name="fruit_2" value="pears" />
          <label htmlFor="fruit_2">Pears</label>
        </div>
        <div className="inputContainer checkbox">
          <input type="checkbox" id="fruit_3" name="fruit_3" value="bananas" />
          <label htmlFor="fruit_3">Bananas</label>
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_9;
