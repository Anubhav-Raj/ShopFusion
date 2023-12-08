import React from "react";
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navebar />
      <Navlist />
      <Home />
      <Footer />
    </>
  );
}

export default App;
