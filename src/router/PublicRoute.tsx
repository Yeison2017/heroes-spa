import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

interface IPublicRoute {
  children: JSX.Element;
}

const PublicRoute = ({ children }: IPublicRoute) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/marvel" />;
};

export default PublicRoute;
