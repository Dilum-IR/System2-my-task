import React from 'react';
import { Route, Routes } from 'react-router-dom';

import WelcomePage from '../pages/Home/WelcomePage';
import ErrorPage from '../pages/Error/ErrorPage';

const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default UserRoutes;
