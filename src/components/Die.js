import React from "react";

export default function Die({ number }) {
  return (
    <div>
      <i className={`fas fa-dice-${number}`}></i>
    </div>
  );
}
