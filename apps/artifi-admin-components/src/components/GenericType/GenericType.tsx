import React from "react";
import { GenericClass } from "../../core/generic-types/classes";
import { add } from "../../core/generic-types/functions";

export class GenericType extends React.Component {
  /**
   * Different types of variable declarations in class
   */
  private name = "sumit";
  protected test = "testing";
  public foo = "foo";
  static _status = "sadfaf";
  readonly _readonly = 1;

  render() {
    GenericClass.setData(Math.PI);
    const a = GenericClass.getData<number>();
    return (
      <h1>
        {add("1", "2")}
        {a.toFixed(5)}
      </h1>
    );
  }
}

/* export const GenericType = () => {
  return (
    <h1>
      {add(1, 2)}
      {add("Hello", "World")}
    </h1>
  );
}; */
