import React from "react";

export default function Result() {
  return (
    <section className="result">
      <h3>Your Result</h3>
      <div className="avg--score">
        <h1>76</h1>
        <h4>out of 100</h4>
      </div>
      <h2>Great</h2>
      <h4>
        You scored higher than 65% of the people who have taken these tests.
      </h4>
    </section>
  );
}
