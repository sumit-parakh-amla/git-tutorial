import React from "react";
import { TextInput } from "./components/InputText/InputText";
import { ExplainRef } from './components/ExplainRef/ExplainRef';
import { GenericType } from './components/GenericType/GenericType';

export function App() {
  return (
    <form>
      <TextInput></TextInput>
      <ExplainRef></ExplainRef>
      <GenericType></GenericType>

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
