import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectRoute = ({ children }) => {
  const isLoggedIn = Cookies.get("loggedIn") === "true";

  if (!isLoggedIn) return <Navigate to="/" replace />;
  return children;
};

export default ProtectRoute;
