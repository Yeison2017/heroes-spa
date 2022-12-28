import { ReactNode, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, IInitialState } from "./authReducer";

interface IAuthProvider {
  children: ReactNode;
}

const initialState: IInitialState = {
  logged: false,
  name: null,
};

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
