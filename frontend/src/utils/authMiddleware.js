import React from "react";
import { Spin } from "antd";

import { useCookies } from "react-cookie";
import { userApi1 } from "../redux/API/userApi";
import Loader from "../components/loader";
const AuthMiddleware = ({ children }) => {
  const [cookies] = useCookies(["logged_in"]);

  const { isLoading } = userApi1.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in,
  });

  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default AuthMiddleware;
