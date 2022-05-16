import React from "react";

const TABLE_8 = () => {
const htmlCode =
`<table>
  <caption>
    This is the Caption!
  </caption>
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
  <tr>
    <td colspan="3">Spanned Cell</td>
  </tr>
</table>`;
const cssCode =
`caption {
  font-size: 1.5rem;
  margin-bottom: .5rem; 
}`
  
    return (
      <main className="main">
        <h3>The Output:</h3>
        <table className="tableBorder collapse">
            <caption>
              This is the Caption!
            </caption>
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
            <tr>
            <td colSpan="3">Spanned Cell</td>
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

export default TABLE_8;
