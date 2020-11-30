import React from "react";
import { TextInput } from "./components/InputText/InputText";
import { ExplainRef } from "./components/ExplainRef/ExplainRef";
import { LiveDate } from "./components/LiveDate/LiveDate";
import { GenericType } from "./components/GenericType/GenericType";
import { MountUnmount } from "./components/MountUnmount/MountUnmount";
import { ReduxMain, store } from "./components/Redux/ReduxMain";
import { Provider } from "react-redux";

export function App() {
  return (
    <>
      <TextInput></TextInput>
      <ExplainRef></ExplainRef>
      <GenericType></GenericType>

      <MountUnmount></MountUnmount>
      <br />
      <br />

      <input type="text" placeholder="Enter name" />

      <button
        type="button"
        onClick={(e) => {
          alert("Button clicked");
        }}
      >
        Submit
      </button>
      <hr />
      <LiveDate></LiveDate>

      <Provider store={store}>
        <ReduxMain></ReduxMain>
      </Provider>
    </>
  );
}
