import React from "react";

const TABLE_4 = () => {
const htmlCode =
`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>R1: Cell A</td>
    <td>R1: Cell B</td>
    <td>R1: Cell C</td>
  </tr>
</table>`;
const cssCode =
`table, th, td {
  border: .15rem solid black;
  border-collapse: collapse; 
}`
  
    return (
      <main className="main">
        <h3>The Output:</h3>
        <table className="tableBorder collapse">
          <tbody>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
            <tr>
              <td>R1: Cell A</td>
              <td>R1: Cell B</td>
              <td>R1: Cell C</td>
            </tr>
          </tbody>
        </table>
        <h3>The HTML:</h3>
        <div>
          <pre>
            <code>{htmlCode}</code>
          </pre>
        </div>
        <h3>The CSS:</h3>
        <div>
          <pre>
            <code>{cssCode}</code>
          </pre>
        </div>
      </main>
    );
};

export default TABLE_4;
