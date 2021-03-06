import React from "react";

const TABLE_6 = () => {
const htmlCode =
`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
      <td rowspan="2">Spanned Cell</td>
      <td>R1: Cell A</td>
      <td>R1: Cell B</td>
  </tr>
  <tr>
      <td>R2: Cell A</td>
      <td>R2: Cell B</td>
  </tr>
</table>`;
  
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
              <td rowSpan="2">Spanned Cell</td>
              <td>R1: Cell A</td>
              <td>R1: Cell B</td>
            </tr>
            <tr>
              <td>R2: Cell A</td>
              <td>R2: Cell B</td>
            </tr>
          </tbody>
        </table>
        <h3>The HTML:</h3>
        <div>
          <pre>
            <code>{htmlCode}</code>
          </pre>
        </div>
      </main>
    );
};

export default TABLE_6;
