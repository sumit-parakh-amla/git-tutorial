import React from "react";
import {TextInput} from "./components/InputText";

export function App() {
  return (
    <form>
      <TextInput></TextInput>
      <input type="text" placeholder="Enter name" />

      <button type="button"
        onClick={(e) => {
          alert("Button clicked");
        }}
      >Submit</button>
    </form>
  );
}
