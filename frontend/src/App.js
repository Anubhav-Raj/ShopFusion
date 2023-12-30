import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));

function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Navlist />

        {/* Wrap your routes in Suspense */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Use the lazy-loaded components */}
            <Route path="/mobile" element={<Brandpage />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </>
  );
}

export default App;
