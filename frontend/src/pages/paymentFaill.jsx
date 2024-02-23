import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentFail = () => {
  const searchQuery = useSearchParams()[0];

  const referenceNum = searchQuery.get("reference");
  return <div>Reference No.{referenceNum}</div>;
};

export default PaymentFail;
