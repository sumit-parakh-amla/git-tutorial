import React from "react";
import { TextInput } from "./components/InputText/InputText";
import { ExplainRef } from './components/ExplainRef/ExplainRef';

export function App() {
  return (
    <form>
      <TextInput></TextInput>
      <ExplainRef></ExplainRef>
      
      <input type="text" placeholder="Enter name" />

      <button
        type="button"
        onClick={(e) => {
          alert("Button clicked");
        }}
      >
        Submit
      </button>
    </form>
  );
}
