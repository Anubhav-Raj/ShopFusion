import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useUserByIDMutation } from "./redux/API/user.js";
import { loginData, loginSuccess } from "./redux/API/user_slice/login.slice.js";
import { useDispatch, useSelector } from "react-redux";

// components import
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import ProtectedRoute from "./utils/protectedRoute.js";
import PaymentSuccess from "./pages/paymentSucess.jsx";
import PaymentFail from "./pages/paymentFaill.jsx";
import Categories from "./pages/admin/components/categories.jsx";
import AdminLayout from "./pages/admin/categories from/layout.jsx";
// import { useLocation } from "react-router-dom";

// Use React.lazy for lazy loading
const Brandpage = lazy(() => import("./pages/Brand_page/Brandpage"));
const LandingPage = lazy(() => import("./pages/Landing_page/Home.jsx"));
const MobileHome = lazy(() => import("./pages/mobile_home/Mobilehome.jsx"));
const Mobiledetail = lazy(() =>
  import("./pages/Mobile_specification/Mobile_specify.jsx")
);
const Compair = lazy(() => import("./pages/compare_page/Compair.jsx"));
const SellerPage = lazy(() => import("./pages/Seller/Seller_page.jsx"));
const Mypost = lazy(() => import("./pages/mypost/My_post.jsx"));
const AddaddressPage = lazy(() => import("./pages/profile/profile.jsx"));
const AdminDashboard = lazy(() => import("./pages/admin/pages/dashboard.jsx"));
const TypeList = lazy(() => import("./pages/admin/pages/alltype.jsx"));
const BrandList = lazy(() => import("./pages/admin/pages/allBrand.jsx"));

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
  }, [token, userByID, dispatch]);

  const excludedRoutes = [
    "/admin/createcategories",
    "/admin",
    "/admin/listtype",
    "/admin/listbrand",
  ];

  return (
    <Router>
      {!excludedRoutes.includes(window.location.pathname) && <Navebar />}
      {!excludedRoutes.includes(window.location.pathname) && <Navlist />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/post" element={<Mypost />} />
          <Route path="/brand" element={<Brandpage />} />
          <Route path="/brand/:brandName" element={<MobileHome />} />
          <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
          <Route path="/compair" element={<Compair />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />

          {token && userData && <Route path="/post" element={<Mypost />} />}
          {token && userData && (
            <Route path="/address" element={<AddaddressPage />} />
          )}

          {/* Admin Routes */}
          <Route path="/admin/" element={<AdminDashboard />} />
          <Route path="/admin/listtype" element={<TypeList />} />
          <Route path="/admin/listbrand" element={<BrandList />} />
          <Route path="admin/createcategories" element={<AdminLayout />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
      {!excludedRoutes.includes(window.location.pathname) && <Footer />}
    </Router>
  );
}

export default App;
