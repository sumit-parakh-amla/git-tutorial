import React from "react";
import { compose, createStore } from "redux";
import HelloClient from "./HelloClient/HelloClient";
import { reducer } from "./reducer";
import ReduxProfile from "./ReduxProfile/ReduxProfile";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
export const store = createStore(reducer, composeEnhancers());

export class ReduxMain extends React.Component {
  render() {
    return (
      <div>
        <ReduxProfile></ReduxProfile>
        <HelloClient></HelloClient>
      </div>
    );
  }
}
