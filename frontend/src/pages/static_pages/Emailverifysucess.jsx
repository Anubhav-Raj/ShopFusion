import React from 'react';
import Verifytemplate from '../../components/login/verifytemplate';

function VerifyPage() {
  const boxText = "Email Successfully Verified!"; // Box text
  const routeTo = "/"; // Route to navigate to on button click

  return (
    <Verifytemplate
      boxText={boxText}
      routeTo={routeTo}
    />
  );
}

export default VerifyPage;
