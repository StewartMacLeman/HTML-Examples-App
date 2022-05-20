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
import FORMS_1 from "./pages/03_forms/FORMS_1";
import FORMS_2 from "./pages/03_forms/FORMS_2";
import FORMS_3 from "./pages/03_forms/FORMS_3";
import FORMS_4 from "./pages/03_forms/FORMS_4";
import FORMS_5 from "./pages/03_forms/FORMS_5";
import FORMS_6 from "./pages/03_forms/FORMS_6";
import FORMS_7 from "./pages/03_forms/FORMS_7";
import FORMS_8 from "./pages/03_forms/FORMS_8";
import FORMS_9 from "./pages/03_forms/FORMS_9";
import FORMS_10 from "./pages/03_forms/FORMS_10";
import FORMS_11 from "./pages/03_forms/FORMS_11";
import FORMS_12 from "./pages/03_forms/FORMS_12";
import FORMS_13 from "./pages/03_forms/FORMS_13";
// -----------------------------
import IMAGES_1 from "./pages/04_images/IMAGES_1";
import IMAGES_2 from "./pages/04_images/IMAGES_2";
// -----------------------------
import NAV_1 from "./pages/05_Navigation/NAV_1";
import NAV_2 from "./pages/05_Navigation/NAV_2";
import NAV_3 from "./pages/05_Navigation/NAV_3";
import NAV_4 from "./pages/05_Navigation/NAV_4";
// -----------------------------
import MISC_1 from "./pages/06_Miscellaneous/MISC_1";
import MISC_2 from "./pages/06_Miscellaneous/MISC_2";
import MISC_3 from "./pages/06_Miscellaneous/MISC_3";
import MISC_4 from "./pages/06_Miscellaneous/MISC_4";
import MISC_5 from "./pages/06_Miscellaneous/MISC_5";
import MISC_6 from "./pages/06_Miscellaneous/MISC_6";
import MISC_7 from "./pages/06_Miscellaneous/MISC_7";
// -----------------------------
import Missing from "./pages/Missing";

const App = () => {
  const [topic, setTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");

  const clearH2 = () => {
    setTopic("");
    setSubTopic("");
  };

  const getTitles = (e) => {
    let itemClicked = e.target;
    let topicSelected =
      itemClicked.parentElement.parentElement.querySelector(
        ".topic"
      ).textContent;
    let subTopicSelected = itemClicked.textContent;
    // ---------------------------
    // console.log(itemClicked);
    // console.log(topicSelected);
    // console.log(subTopicSelected);
    // ---------------------------
    setTopic(topicSelected + ": ");
    setSubTopic(subTopicSelected);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              topic={topic}
              subTopic={subTopic}
              getTitles={getTitles}
              clearH2={clearH2}
            />
          }
        >
          {/* ----------------------------- */}
          <Route index element={<Home />} />
          {/* ----------------------------- */}
          <Route path="tables/missing_th_tags" element={<TABLE_1 />} />
          <Route path="tables/with_th_tags" element={<TABLE_2 />} />
          <Route path="tables/cell_borders" element={<TABLE_3 />} />
          <Route path="tables/border_collapse" element={<TABLE_4 />} />
          <Route path="tables/colspan" element={<TABLE_5 />} />
          <Route path="tables/rowspan" element={<TABLE_6 />} />
          <Route path="tables/colgroup" element={<TABLE_7 />} />
          <Route path="tables/caption" element={<TABLE_8 />} />
          <Route path="tables/semantics" element={<TABLE_9 />} />
          {/* ----------------------------- */}
          {/* Issue with using an active psuedo-class; the index element is always selected.*/}
          {/* Original set-up shown below for reference. */}
          {/* <Route path="tables/*">
            <Route index element={<TABLE_1 />} />
            <Route path="with_th_tags" element={<TABLE_2 />} />
            <Route path="cell_borders" element={<TABLE_3 />} />
            <Route path="border_collapse" element={<TABLE_4 />} />
            <Route path="colspan" element={<TABLE_5 />} />
            <Route path="rowspan" element={<TABLE_6 />} />
            <Route path="colgroup" element={<TABLE_7 />} />
            <Route path="caption" element={<TABLE_8 />} />
            <Route path="semantics" element={<TABLE_9 />} />
          </Route> */}
          {/* ----------------------------- */}
          <Route path="lists/unordered-list" element={<LISTS_1 />} />
          <Route path="lists/list-style-type-attrb" element={<LISTS_2 />} />
          <Route path="lists/list-style-type-prop" element={<LISTS_3 />} />
          <Route path="lists/nested-list" element={<LISTS_4 />} />
          <Route path="lists/ordered-list" element={<LISTS_5 />} />
          <Route path="lists/type-attrb" element={<LISTS_6 />} />
          <Route path="lists/description-list" element={<LISTS_7 />} />
          {/* ----------------------------- */}
          <Route path="forms/input-text" element={<FORMS_1 />} />
          <Route path="forms/autofocus-attrb" element={<FORMS_2 />} />
          <Route path="forms/value-attrb" element={<FORMS_3 />} />
          <Route path="forms/placeholder-attrb" element={<FORMS_4 />} />
          <Route path="forms/autocomplete-attrb" element={<FORMS_5 />} />
          <Route path="forms/disabled-attrb" element={<FORMS_6 />} />
          <Route path="forms/input-hidden" element={<FORMS_7 />} />
          <Route path="forms/input-radio" element={<FORMS_8 />} />
          <Route path="forms/input-checkbox" element={<FORMS_9 />} />
          <Route path="forms/textarea" element={<FORMS_10 />} />
          <Route path="forms/select-option" element={<FORMS_11 />} />
          <Route path="forms/input-datalist" element={<FORMS_12 />} />
          <Route path="forms/fieldset-legend" element={<FORMS_13 />} />
          {/* ----------------------------- */}
          <Route path="images/src-attrb" element={<IMAGES_1 />} />
          <Route path="images/bgImage-property" element={<IMAGES_2 />} />
          {/* ----------------------------- */}
          <Route path="nav/vertical-nav" element={<NAV_1 />} />
          <Route path="nav/horizontal-nav" element={<NAV_2 />} />
          <Route path="nav/flexbox-ex1" element={<NAV_3 />} />
          <Route path="nav/flexbox-ex2" element={<NAV_4 />} />
          {/* ----------------------------- */}
          <Route path="misc/del-tag" element={<MISC_1 />} />
          <Route path="misc/mark-tag" element={<MISC_2 />} />
          <Route path="misc/q-tag" element={<MISC_3 />} />
          <Route path="misc/blockquote-tag" element={<MISC_4 />} />
          <Route path="misc/cite-tag" element={<MISC_5 />} />
          <Route path="misc/bdo-tag" element={<MISC_6 />} />
          <Route path="misc/abbr-tag" element={<MISC_7 />} />
          {/* ----------------------------- */}
          <Route path="*" element={<Missing clearH2={clearH2} />} />
          {/* ------------------------------ */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
