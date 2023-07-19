import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const toHaveStyle = {
    color: 'firebrick',
  }
  return (
  <div id="home">
  <h1 style={toHaveStyle}>{name} is a Web developer from {city}</h1>
  </div>
  );
}

export default Home;
