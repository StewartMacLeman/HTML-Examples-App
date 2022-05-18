import React from "react";
import "./forms.css";

const FORMS_12 = () => {
const htmlCode = 
`<form>
  <div>

    <label for="fruitChoice">Type your choice:
    </label>
    <input id="fruitChoice" list="fruits" />

    <datalist id="fruits">
      <option value="Peach"/>
      <option value="Pear"/>
      <option value="Pineapple"/>
      <option value="Mango"/>
      <option value="Apple"/>
    </datalist>

  </div>
</form>`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      
      <div className="formContainer">
      <form  onSubmit={e => e.preventDefault()}>
        <div className="inputContainerColumn">
          <label htmlFor="fruitChoice">Type your choice:</label>
          <input id="fruitChoice" list="fruits" />
          <datalist id="fruits">
            <option value="Peach"/>
            <option value="Pear"/>
            <option value="Pineapple"/>
            <option value="Mango"/>
            <option value="Apple"/>
          </datalist>
        </div>
      </form>
      </div>

      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
    </main>
  );
};

export default FORMS_12;
