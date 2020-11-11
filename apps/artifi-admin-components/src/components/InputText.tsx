import React from "react";

export function TextInput() {
  return (
    <div>
      <input type="text" id="inputName" />
      <button type="button" onClick={showName}>
        Show Name
      </button>
      <p id="outputName"></p>
    </div>
  );

  function showName(e) {
    var input = (document.getElementById("inputName") as any) .value;
    console.log(input);
    document.getElementById("outputName").innerHTML = input;
  }
}
