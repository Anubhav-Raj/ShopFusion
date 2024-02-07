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

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const MobileHome = lazy(() => import("./pages/Mobile_home/Mobilehome"));
const Mobiledetail = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify.jsx")
);

const Compair = lazy(() => import("./pages/compare_page/Compair.jsx"));
const SellerPage = lazy(() => import("./pages/Seller/Seller_page.jsx"));
const Mypost = lazy(() => import("./pages/mypost/My_post.jsx"));

const AddMobile = lazy(() => import("./pages/mypost/Mobile/AddMobile.jsx"));
const AddaddressPage = lazy(() => import("./pages/profile/profile.jsx"));
function App() {
  const dispatch = useDispatch();
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
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/post" element={<Mypost />} />
            <Route path="/brand" element={<Brandpage />} />
            {/* Use the lazy-loaded components */}
            <Route path="/brand/:brandName" element={<MobileHome />} />
            <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
            <Route path="/compair" element={<Compair />} />
            <Route path="/addmobile" element={<AddMobile />} />
            <Route path="/profile" element={<AddaddressPage />} />
          </Routes>
        </Suspense>
        <Toaster position="bottom-center" />
        <Footer />
      </Router>
    </>
  );
}

export default App;

//--legacy-peer-deps
