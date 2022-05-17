import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout_components/Layout";
import Home from "./pages/Home";
// -----------------------------
import TABLE_1 from "./pages/01_tables/TABLE_1";
import TABLE_2 from "./pages/01_tables/TABLE_2";
import TABLE_3 from "./pages/01_tables/TABLE_3";
import TABLE_4 from "./pages/01_tables/TABLE_4";
import TABLE_5 from "./pages/01_tables/TABLE_5";
import TABLE_6 from "./pages/01_tables/TABLE_6";
import TABLE_7 from "./pages/01_tables/TABLE_7";
import TABLE_8 from "./pages/01_tables/TABLE_8";
import TABLE_9 from "./pages/01_tables/TABLE_9";
// -----------------------------
import LISTS_1 from "./pages/02_lists/LISTS_1";
import LISTS_2 from "./pages/02_lists/LISTS_2";
import LISTS_3 from "./pages/02_lists/LISTS_3";
import LISTS_4 from "./pages/02_lists/LISTS_4";
import LISTS_5 from "./pages/02_lists/LISTS_5";
import LISTS_6 from "./pages/02_lists/LISTS_6";
import LISTS_7 from "./pages/02_lists/LISTS_7";
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
    // console.log(itemClicked);
    // console.log(topicSelected);
    // console.log(subTopicSelected);
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
            <Route path="with_th_tags" element={<TABLE_2 />} />
            <Route path="cell_borders" element={<TABLE_3 />} />
            <Route path="border_collapse" element={<TABLE_4 />} />
            <Route path="colspan" element={<TABLE_5 />} />
            <Route path="rowspan" element={<TABLE_6 />} />
            <Route path="colgroup" element={<TABLE_7 />} />
            <Route path="caption" element={<TABLE_8 />} />
            <Route path="semantics" element={<TABLE_9 />} />
          </Route>
          <Route path="lists">
            <Route index element={<LISTS_1 />} />
            <Route path="list-style-type-attrb" element={<LISTS_2 />} />
            <Route path="list-style-type-prop" element={<LISTS_3 />} />
            <Route path="nested-list" element={<LISTS_4 />} />
            <Route path="ordered-list" element={<LISTS_5 />} />
            <Route path="type-attrb" element={<LISTS_6 />} />
            <Route path="description-list" element={<LISTS_7 />} />
          </Route>
          <Route path="*" element={<Missing clearH2={clearH2} />} />
          {/* ----------------------------------- */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
