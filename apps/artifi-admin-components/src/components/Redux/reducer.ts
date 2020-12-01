import { Actions, DEFAULT_STATE } from "./constants";

export const reducer = (state = DEFAULT_STATE, action) => {

  if (action.type === Actions.UPDATE_WELCOME) {
    state.helloClient.welcomeMessage = action.payload;
  }

  if(action.type === Actions.UPDATE_PROFILE) {
      state.profile.firstName = action.payload.firstName;
      state.profile.lastName = action.payload.lastName;
  }

  return { ...state };
};
