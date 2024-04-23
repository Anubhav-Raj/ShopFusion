import React from "react";
import { useAppSelector } from "../../redux/store";
import Verifytemplate from "../../components/login/verifytemplate";
import Logo from "../../assets/failedlogo.png";

const UnauthorizePage = () => {
  const user = useAppSelector((state) => state.user2.user);

  const boxText = "Access Denied: Unauthorized Entry";

  const routeTo = "/"; // You can specify the route you want to navigate to

  return <Verifytemplate boxImg={Logo} boxText={boxText} routeTo={routeTo} />;
};

export default UnauthorizePage;
