import React from "react";
import "./forms.css";

const FORMS_11 = () => {
const htmlCode = 
`<form>
  <div>
    <label for="fruit">Choose a Fruit:</label>

    <select id="fruit" name="fruit">

      <option value="peach">Peach</option>
      <option value="pear">Pear</option>
      <option value="pineapple">Pineapple</option>

      *** Mango is set as the default option!
      <option value="mango" selected>Mango</option>
      <option value="apple">Apple</option>
      
    </select>
    
  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainer">
          <label htmlFor="fruit">Choose a Fruit:</label>
          <select id="fruit" name="fruit" defaultValue={"mango"}>
            <option value="peach">Peach</option>
            <option value="pear">Pear</option>
            <option value="pineapple">Pineapple</option>
            <option value="mango">Mango</option>
            <option value="apple">Apple</option>
          </select>
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_11;
