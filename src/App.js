import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout_components/Layout";
import Home from "./pages/Home";
// -----------------------------
import TABLE_1 from "./pages/01_tables/TABLE_1";
import TABLE_2 from "./pages/01_tables/TABLE_2";
import TABLE_3 from "./pages/01_tables/TABLE_3";
// -----------------------------
import LISTS_1 from "./pages/02_lists/LISTS_1";
import LISTS_2 from "./pages/02_lists/LISTS_2";
import LISTS_3 from "./pages/02_lists/LISTS_3";
// -----------------------------
import Missing from "./pages/Missing";

const App = () => {
  const [topic, setTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");

  const clearH2 = () => {
    setTopic("");
    setSubTopic("");
  }

  const getTitles = (e) => {
    let itemClicked = e.target
    let topicSelected = itemClicked.parentElement.parentElement.querySelector(".topic").textContent;
    let subTopicSelected = itemClicked.textContent
    // ---------------------------
    console.log(itemClicked);
    console.log(topicSelected);
    console.log(subTopicSelected);
    // ---------------------------
    setTopic(topicSelected + ": ");
    setSubTopic(subTopicSelected);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout topic={topic} subTopic={subTopic} getTitles={getTitles} clearH2={clearH2} />}>
        {/* ----------------------------- */}
          <Route index element={<Home />} />
          <Route path="tables">
            <Route index element={<TABLE_1 />} />
            <Route path="ex_2" element={<TABLE_2 />} />
            <Route path="ex_3" element={<TABLE_3 />} />
          </Route>
          <Route path="lists">
            <Route index element={<LISTS_1 />} />
            <Route path="ex_2" element={<LISTS_2 />} />
            <Route path="ex_3" element={<LISTS_3 />} />
          </Route>
          <Route path="*" element={<Missing clearH2={clearH2} />} />
          {/* ----------------------------------- */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
