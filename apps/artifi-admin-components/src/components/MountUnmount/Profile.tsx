import React from "react";

export class Profile extends React.Component {
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
    return (
      <div>
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
