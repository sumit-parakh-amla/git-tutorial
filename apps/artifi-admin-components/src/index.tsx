import React from "react";
import { TextInput } from "./components/InputText/InputText";
import { ExplainRef } from './components/ExplainRef/ExplainRef';
import {LiveDate} from './components/LiveDate/LiveDate';
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
      <hr/>
      <LiveDate></LiveDate>
    </form>
  );
}
