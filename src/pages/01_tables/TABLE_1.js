import React from "react";
import "./tables.css"

const TABLE_1 = () => {
const htmlCode = 
`<table>
  <tbody>
    <tr>
      <td>R1: Cell 1</td>
      <td>R1: Cell 2</td>
      <td>R1: Cell 3</td>
    </tr>
    <tr>
      <td>R2: Cell A</td>
      <td>R2: Cell B</td>
      <td>R2: Cell C</td>
    </tr>
  </tbody>
</table>`;

  return (
    <main className="main">
      <h3>The Output:</h3>
      <table>
        <tbody>
          <tr>
            <td>R1: Cell 1</td>
            <td>R1: Cell 2</td>
            <td>R1: Cell 3</td>
          </tr>
          <tr>
            <td>R2: Cell A</td>
            <td>R2: Cell B</td>
            <td>R2: Cell C</td>
          </tr>
        </tbody>
      </table>
      <h3>The HTML:</h3>
      <div><pre><code>{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
    </main>
  );
};

export default TABLE_1;
