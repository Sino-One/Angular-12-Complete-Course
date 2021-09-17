import {User} from "../user.model";

export interface State {
  user: User;
}

const initialState = {
  user: null
};

export function AuthReducer(state = initialState, action) {
  return state;
}
