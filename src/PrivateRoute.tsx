import React from "react";
import { Navigate } from "react-router-dom";
import { getUserToken } from "utils/token";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticationPath,
  outlet
}: ProtectedRouteProps) {
  if (getUserToken()) {
    return outlet;
  }
  return <Navigate to={{ pathname: authenticationPath }} />;
}
