import React from "react";
import "./navigation.css";

const NAV_3 = () => {
const htmlCode = 
`<nav>
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`;
const cssCode = 
`nav {
  border: .15rem solid black;
  width: 100%;
  margin: 1rem auto;
  background-color: lightgrey;
}
nav ul {
  margin: 0;
  padding: 0 4rem;
  list-style-type: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav a {
  font-family: verdana, helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: tomato; 
  text-decoration: none;
  display: block;
  padding: .5rem 1rem;
}
nav a:hover {
  background-color: blueviolet;
}`;
  
  return (
    <main className="main">
      <h3>The Output:</h3>
      <div className="navDiv">
        <nav className="navEx3">
          <ul>
            <li><span>Home</span></li>
            <li><span>About</span></li>
            <li><span>Shop</span></li>
            <li><span>Contact</span></li>
          </ul>
        </nav>
      </div>
      
      <h3>The HTML:</h3>
      <div><pre><code className="small">{htmlCode}</code></pre></div>
      <h3>The CSS:</h3>
      <div><pre><code className="small">{cssCode}</code></pre></div>
    </main>
  );
};

export default NAV_3;
