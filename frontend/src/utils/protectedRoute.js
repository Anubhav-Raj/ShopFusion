import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/API/user_slice/user.slice";
import React from "react";

const ProtectedRoute = ({ element, ...rest }) => {
  // Get user data from Redux store
  //   const userData = useSelector(selectUserData);
  const token = localStorage.getItem("ZoneHub");
  // Check if user is authenticated
  const isAuthenticated = !!token;
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
