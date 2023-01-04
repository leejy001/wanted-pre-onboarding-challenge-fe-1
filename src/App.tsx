import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import PrivateRoute, { ProtectedRouteProps } from "./PrivateRoute";

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/auth",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth" />} />
        <Route path="/auth" element={<Main />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute {...defaultProtectedRouteProps} outlet={<Todo />} />
          }
        />
        <Route path="/todo/add" />
        <Route path="/todo/:id" />
        <Route path="/todo/edit/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
