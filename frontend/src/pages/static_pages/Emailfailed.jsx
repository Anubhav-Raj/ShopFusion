import React from "react";
import Verifytemplate from "../../components/login/verifytemplate";
import FailedLogo from "../../assets/failedlogo.png";

function MailFailedPage() {
  const boxText = "Email Verification Failed!"; // Box text
  const routeTo = "/"; // Route to navigate to on button click

  return <Verifytemplate boxImg={FailedLogo} boxText={boxText} routeTo={routeTo} />;
}

export default MailFailedPage;
