import React from "react";

export class Profile extends React.Component {

  name = 'Sumit';

/*   foo = function() {
    console.log('Outer Normal function::', this);
    return function() {
      console.log('Inner Normal Function::', this);
    }
  }
 */
/*   arrowFoo = () => {
    return () => {
      console.log('Arrow Function::', this.name);
    }
  } */

  componentDidMount() {
    console.log("Profile::componentDidMount");
  }

  /**
   * Perform all the cleanup activities regarding the component
   */
  componentWillUnmount() {
    console.log("Profile::componentWillUnmount");
  }

  render() {

    // this.foo()();
    // this.arrowFoo()();


    const onDivClick2 = (e) => {
      // console.log(e, this);
      alert(this.name);
    }

    const foo = () => 'Hello';

    

    // function onDivClick(e){
    //   console.log(this, e);
    //   alert(this.name);
    //   // console.log
    // }

    return (
      <div onClick={onDivClick2}>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>Sumit</td>
            </tr>
            <tr>
              <td>Company: </td>
              <td>MRRSoft</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
