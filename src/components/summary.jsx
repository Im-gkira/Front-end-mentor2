import React from "react";
import data from "../assets/data";
import Card from "./card";

export default function Summary() {
  const cards = data.map(function (element) {
    return (
      <Card image={element.img} name={element.name} score={element.score} />
    );
  });
  return (
    <section className="summary">
      <h3>Summary</h3>
      {cards}
      <button>Continue</button>
    </section>
  );
}
