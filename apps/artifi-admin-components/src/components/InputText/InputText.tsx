import React from "react";

const inputNameRef = React.createRef<HTMLInputElement>();
const outputNameRef = React.createRef<HTMLParagraphElement>();

const showName = (e) => {
  outputNameRef.current.innerHTML = inputNameRef.current.value;
};

export function TextInput() {
  return (
    <div>
      <input type="text" ref={inputNameRef} />
      <button type="button" onClick={showName}>
        Show Name
      </button>
      <p ref={outputNameRef}></p>
    </div>
  );
}
