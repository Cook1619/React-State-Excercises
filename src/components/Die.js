import React from "react";
import "./Die.css";

export default function Die({ number }) {
  return (
    <div>
      <i className={`fas fa-dice-${number}`}></i>
    </div>
  );
}
