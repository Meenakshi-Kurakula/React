import React from "react";
import "./style.css";
import Nav from "./Nav"
import Data from "./data"
import Place from "./Place"

export default function App() {
  const el=Data.map(i=>
    <Place pro={i}/>)
  return (
    <div>
      <Nav/>
      <div className="card">
      {el}
      </div>
    </div>
  );
}
