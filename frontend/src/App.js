import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { userExist, userNotExist } from "./redux/user.slice.js";
import { getUser } from "./redux/API/user.js";
import ProtectedRoute from "./components/protectRoutes.js";

// components import
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import Home from "./pages/Home/Home";
import Compair from "./pages/compare_page/Compair.jsx";

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const MobileHome = lazy(() => import("./pages/Mobile_home/Mobilehome"));
const Mobiledetail = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify.jsx")
);
const productdetailsPage = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify")
);
const SellerPage = lazy(() => import("./pages/Seller/Seller_page.jsx"));
function App() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not available");
        return null;
      }
      if (user) {
        const data = await getUser(user.uid);
        data.token = token;
        dispatch(userExist(data));
      } else {
        dispatch(userNotExist());
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Navebar />
        <Navlist />
        {/* <Compair /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Use the lazy-loaded components */}
            <Route path="/" element={<SellerPage />} />
            <Route path="/brand" element={<Brandpage />} />

            {/* Use the lazy-loaded components */}
            <Route path="/brand/:brandName" element={<MobileHome />} />
            <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
          </Routes>
        </Suspense>
        <Toaster position="bottom-center" />

        <Footer />
      </Router>
    </>
  );
}

export default App;
