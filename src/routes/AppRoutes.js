import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import ErrorPage from "../pages/Error/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";

import UserRoutes from "./UserRoutes";
import ProtectRoute from "./ProtectRoute";

const AppRoutes = () => {
  const isLoggedIn = Cookies.get("loggedIn") === "true";
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={isLoggedIn ? <Navigate to="/user" /> : <LoginPage />}
      />
      {/* Role-based routes */}
      <Route
        path="/user/*"
        element={
          <ProtectRoute>
            <UserRoutes />
          </ProtectRoute>
        }
      />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
