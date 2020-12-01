import React from "react";

export function ExplainRef() {
  const firstNameRef = React.createRef<HTMLInputElement>();
  const lastNameRef = React.createRef<HTMLInputElement>();
  const fullNameRef = React.createRef<HTMLLabelElement>();

  const OnSubmit = (e) => {
    //if(fullNameRef.current){
    fullNameRef.current.innerHTML =
      firstNameRef.current.value + " " + lastNameRef.current.value;
    //}
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter first name" ref={firstNameRef} />
        <input type="text" placeholder="Enter last name" ref={lastNameRef} />

        <button type="button" onClick={OnSubmit}>
          Show Name
        </button>
        <br />
        <label ref={fullNameRef}></label>
      </form>
    </div>
  );
}
