import React from "react";
import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (sessionStorage.getItem("token")) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
