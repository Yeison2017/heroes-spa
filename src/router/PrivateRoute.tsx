import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

interface IPrivateRoute {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { logged } = useContext(AuthContext);

  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
