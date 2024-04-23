import React from "react";
import { useSearchParams } from "react-router-dom";
import Verifytemplate from "../../components/login/verifytemplate";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];

  const referenceNum = searchQuery.get("reference");
  const boxText = `Payment Successfull ! Reference No. ${referenceNum}`;
  const routeTo = "/";

  return (
    <Verifytemplate
      boxText={boxText}
      routeTo={routeTo}
    />
  );
};

export default PaymentSuccess;
