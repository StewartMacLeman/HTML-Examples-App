import React from "react";

const Header = ({topic, subTopic}) => {
  return (
    <header className="header">
        <h1>HTML Examples</h1>
        {topic && <h2>{topic}{subTopic}</h2>}
    </header>
  )
}

export default Header;