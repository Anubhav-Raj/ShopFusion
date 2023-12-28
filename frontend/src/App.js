import React from "react";
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Brandpage from "./pages/Brand_page/Brandpage";
// import Home from "./pages/Home/Home";
// import Mobile_home from "./pages/mobile_home/Mobile_home";

function App() {
  return (
    <>
      <Navebar />
      <Navlist />
      {/* <Home /> */}
      <Brandpage/>
      {/* <Mobile_home /> */}
      <Footer />
    </>
  );
}

export default App;
