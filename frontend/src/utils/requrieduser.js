import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { userApi1 } from "../redux/API/userApi";
import Loader from "../components/loader";

const RequireUser = ({ allowedRoles }) => {
  const [cookies] = useCookies(["logged_in"]);
  const location = useLocation();

  const { isLoading, isFetching } = userApi1.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const user = userApi1.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  if (loading) {
    return <Loader />;
  }

  return (cookies.logged_in || user) && allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : cookies.logged_in && user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireUser;
