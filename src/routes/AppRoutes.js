import { Route, Routes } from "react-router-dom";

import ErrorPage from "../pages/Error/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";

import UserRoutes from "./UserRoutes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />

    {/* Role-based routes */}
    <Route path="/user/*" element={<UserRoutes />} />

    <Route path="/error" element={<ErrorPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
