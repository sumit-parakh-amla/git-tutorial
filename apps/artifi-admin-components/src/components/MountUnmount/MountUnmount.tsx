import React from "react";
import { Profile } from "./Profile";

export class MountUnmount extends React.Component<any, any> {
  constructor(props, state) {
    super(props, state);
    this.state = {
      showProfile: false,
    };
  }

  updateProfileStatus(status, event) {
    this.setState({
      showProfile: status,
    });
  }

  render() {
    return (
      <>
        {this.state.showProfile && <Profile></Profile>}
        <button
          type="button"
          onClick={this.updateProfileStatus.bind(this, true)}
        >
          Show Profile
        </button>
        <button
          type="button"
          onClick={this.updateProfileStatus.bind(this, false)}
        >
          Hide Profile
        </button>
      </>
    );
  }
}
