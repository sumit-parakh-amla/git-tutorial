import React from "react";
import { connect } from "react-redux";
import { Actions } from "../constants";

interface IHelloClientProps {
  welcomeMessage?: string;
  dispatch?: Function;
}

export class HelloClient extends React.Component<IHelloClientProps> {
  updateMessage() {
    this.props.dispatch({
      type: Actions.UPDATE_WELCOME,
      payload: Math.random().toString(36).substring(7),
    });
  }

  render() {
    console.log({ helloWorldProps: this.props });
    return (
      <>
        <h1>{this.props.welcomeMessage}</h1>
        <button onClick={this.updateMessage.bind(this)} type="button">
          Update Welcome Message
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.helloClient };
};

export default connect(mapStateToProps)(HelloClient);
