import { types } from "../types/types";

export interface IInitialState {
  logged: boolean;
  user?: string | null;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
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
