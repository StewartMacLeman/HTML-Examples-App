import React from "react";

const TABLE_9 = () => {
const htmlCode =
`<table>
  <caption>
    This is the Caption!
  </caption>

  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>R1: Cell A</td>
      <td>R1: Cell B</td>
      <td>R1: Cell C</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colSpan="3">Spanned Cell</td>
    </tr>
  </tfoot>
</table>`;
const cssCode =
`thead, tfoot {
  background-color: coral;
}`
  
    return (
      <main className="main">
        <h3>The Output:</h3>
        <table className="tableBorder collapse">
          <caption>
            This is the Caption!
          </caption>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R1: Cell A</td>
              <td>R1: Cell B</td>
              <td>R1: Cell C</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
            <td colSpan="3">Spanned Cell</td>
            </tr>
          </tfoot>
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

export default TABLE_9;
