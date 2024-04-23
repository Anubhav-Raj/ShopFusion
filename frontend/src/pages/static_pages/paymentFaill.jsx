// PaymentFail.js
import React from "react";
import { useSearchParams } from "react-router-dom";
import Verifytemplate from "../../components/login/verifytemplate";
import Logo from "../../assets/failedlogo.png";
const PaymentFail = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <Verifytemplate
      boxImg={Logo}
      boxText={`Payment Failed for Reference No. ${referenceNum}`}
      routeTo="/" // You can specify the route you want to navigate to on button click
    />
  );
};

export default PaymentFail;
