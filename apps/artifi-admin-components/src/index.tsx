import React from "react";

export function App() {
  return (
    <form>
      <input type="text" placeholder="Enter name" />

      <button
        onClick={(e) => {
          alert("Button clicked");
        }}
      >Submit</button>
    </form>
  );
}
