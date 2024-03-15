import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// components import
import Navebar from "./components/header/navebar";
import Navlist from "./components/header/navlist";
import Footer from "./components/footer/footer";
import Loader from "./components/loader";
import PaymentSuccess from "./pages/paymentSucess.jsx";
import PaymentFail from "./pages/paymentFaill.jsx";
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
const RequireUser = lazy(() => import("./utils/requrieduser.js"));
const UnauthorizePage = lazy(() => import("./pages/unauthorized.jsx"));
function App() {
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
          <Route path="/brand" element={<Brandpage />} />
          <Route path="/brand/:brandName" element={<MobileHome />} />
          <Route path="/mobile/:mobiledetail" element={<Mobiledetail />} />
          <Route path="/compair" element={<Compair />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="/unauthorized" element={<UnauthorizePage />} />

          <Route element={<RequireUser allowedRoles={["user"]} />}>
            <Route path="/post" element={<Mypost />} />
            <Route path="/address" element={<AddaddressPage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<RequireUser allowedRoles={["Admin"]} />}>
            <Route path="/admin/" element={<AdminDashboard />} />
            <Route path="/admin/listtype" element={<TypeList />} />
            <Route path="/admin/listbrand" element={<BrandList />} />
            <Route path="admin/createcategories" element={<AdminLayout />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
      {!excludedRoutes.includes(window.location.pathname) && <Footer />}
    </Router>
  );
}

export default App;
