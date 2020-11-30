import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { Actions } from "../constants";

interface IProfileProps {
  firstName?: string;
  lastName?: string;
  dispatch?: Function;
}

export class ReduxProfile extends Component<IProfileProps> {
  firstNameRef = createRef<HTMLInputElement>();
  lastNameRef = createRef<HTMLInputElement>();

  updateProfile() {
    this.props.dispatch({
      type: Actions.UPDATE_PROFILE,
      payload: {
        firstName: this.firstNameRef.current.value,
        lastName: this.lastNameRef.current.value,
      },
    });
  }

  render() {
    console.log({ reduxFormProps: this.props });
    return (
      <form>
        <div>
          <input
            type="text"
            name="firstName"
            ref={this.firstNameRef}
            placeholder="Enter first name"
          />
          <input
            type="text"
            name="lastName"
            ref={this.lastNameRef}
            placeholder="Enter last name"
          />
          <button onClick={this.updateProfile.bind(this)} type="button">
            Update
          </button>
        </div>
        <div>
          <label>
            <strong>First Name</strong>: {this.props.firstName}
          </label>
          <label>
            <strong>Last Name</strong>: {this.props.lastName}
          </label>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.profile };
};

export default connect(mapStateToProps)(ReduxProfile);
