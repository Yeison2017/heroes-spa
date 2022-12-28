import { types } from "../types/types";

export interface IInitialState {
  logged: boolean;
  name: string | null;
}

export interface IAction {
  type: string;
  payload: string;
}

export const authReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case types.login:
      return {
        logged: true,
        name: action.payload,
      };
    case types.logout:
      return {
        logged: false,
        name: null,
      };
    default:
      return state;
  }
};
