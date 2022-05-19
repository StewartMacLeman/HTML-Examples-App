import React from "react";

const Home = () => {
  return (
    <main className="main">
      <h2 className="underline">What's this about?</h2>
      <p>This app contains html code examples, to be used as a quick refresher on various topics.</p>
      <h2 className="underline">How to use the app?</h2>
      <ul className="homeList">
        <li>Review the topic within the navigation section.</li>
        <li>Click on an item of interest.</li>
        <li>Review the html and the resulting output.</li>
      </ul>
      <p className="smallerText">Some sections include css code that is relevant to the html example.</p>
    </main>
  )
};

export default Home;
