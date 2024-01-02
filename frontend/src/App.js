import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import Mobilebrand  from "./pages/Brand_page/Brandpage"
import Home from "./pages/Home/Home"
import Mobile_specify from "./pages/Mobile_specification/Mobile_specify";

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const MobileHome = lazy(() => import("./pages/Mobile_home/Mobilehome"));

function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Navlist />
        {/* <Mobile_specify/> */}
        {/* <Mobilebrand /> */}
        {/* <Home /> */}
        {/* Wrap your routes in Suspense */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Use the lazy-loaded components */}
            <Route path="/mobile" element={<Brandpage />} />
            <Route path="/brand" element={<MobileHome />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </>
  );
}

export default App;
