import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useUserByIDMutation } from "./redux/API/user.js";
import { selectUserData, setUser } from "./redux/API/user_slice/user.slice.js";
import { useDispatch, useSelector } from "react-redux";

// components import
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import ProtectedRoute from "./utils/protectedRoute.js";
import { loginData, loginSuccess } from "./redux/API/user_slice/login.slice.js";

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const MobileHome = lazy(() => import("./pages/mobile_home/Mobilehome"));
const Mobiledetail = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify.jsx")
);

const Compair = lazy(() => import("./pages/compare_page/Compair.jsx"));
const SellerPage = lazy(() => import("./pages/Seller/Seller_page.jsx"));
const Mypost = lazy(() => import("./pages/mypost/My_post.jsx"));

const AddMobile = lazy(() => import("./pages/mypost/Mobile/AddMobile.jsx"));
const AddaddressPage = lazy(() => import("./pages/profile/profile.jsx"));
function App() {
  const [userByID] = useUserByIDMutation();
  const dispatch = useDispatch();
  const token = localStorage.getItem("ZoneHub");
  const userData = useSelector(loginData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          console.error("Token not available");
          return;
        }
        const { data } = await userByID();
        dispatch(loginSuccess(data.user));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Router>
        <Navebar />
        <Navlist />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/brand" element={<Brandpage />} />
            <Route path="/brand/:brandName" element={<MobileHome />} />
            <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
            <Route path="/compair" element={<Compair />} />

            {/* Protected Routes */}
            {token && userData && <Route path="/post" element={<Mypost />} />}
            {token && userData && (
              <Route path="/addmobile" element={<AddMobile />} />
            )}
            {token && userData && (
              <Route path="/address" element={<AddaddressPage />} />
            )}
          </Routes>
        </Suspense>
        <Toaster position="bottom-center" />
        <Footer />
      </Router>
    </>
  );
}

export default App;
