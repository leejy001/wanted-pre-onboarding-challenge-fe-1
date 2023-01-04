import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import AddTodo from "./pages/AddTodo";
import DetailTodo from "./pages/DetailTodo";
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
        <Route
          path="/todo/add"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<AddTodo />}
            />
          }
        />
        <Route
          path="/todo/:id"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<DetailTodo />}
            />
          }
        />
        <Route path="/todo/edit/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
