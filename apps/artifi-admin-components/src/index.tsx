import React from "react";
import { TextInput } from "./components/InputText/InputText";
import { ExplainRef } from './components/ExplainRef/ExplainRef';
import {LiveDate} from './components/LiveDate/LiveDate';
import { GenericType } from './components/GenericType/GenericType';
import { MountUnmount } from "./components/MountUnmount/MountUnmount";

export function App() {
  return (
    <form>
      <TextInput></TextInput>
      <ExplainRef></ExplainRef>
      <GenericType></GenericType>

      <MountUnmount></MountUnmount>
      <br /><br />

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
