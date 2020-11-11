import React from "react";

export function ExplainRef() {
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const fullNameRef = React.createRef();

  const OnSubmit = (e) => {
    fullNameRef.current.innerHTML =
      firstNameRef.current.value + " " + lastNameRef.current.value;
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
