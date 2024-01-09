import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import Mobilebrand from "./pages/Brand_page/Brandpage";
import Home from "./pages/Home/Home";
import Compair from "./pages/compare_page/Compair.jsx";
import Seller_page from "./pages/Seller/Seller_page.jsx";

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const MobileHome = lazy(() => import("./pages/Mobile_home/Mobilehome"));
const Mobiledetail = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify.jsx")
);

const productdetailsPage = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify")
);

function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Navlist />
        <Seller_page/>
        {/* <Compair /> */}

        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Use the lazy-loaded components */}
            <Route path="/brand" element={<Brandpage />} />
            <Route path="/brand/:brandName" element={<MobileHome />} />
            <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </>
  );
}

export default App;
