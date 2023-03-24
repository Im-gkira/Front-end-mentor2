import React from "react";
import Result from "./components/result";
import Summary from "./components/summary";
import "./App.css"


export default function App(){
  return (
    <div className="main">
      <Result/>
      <Summary/>
    </div>
  )
}