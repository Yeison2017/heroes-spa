import { ReactNode, useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer, IInitialState } from "./authReducer";

interface IAuthProvider {
  children: ReactNode;
}

const init = (): IInitialState => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = {
      id: "ABC",
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
