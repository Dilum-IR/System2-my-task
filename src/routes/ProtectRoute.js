import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectRoute = ({ children }) => {
  const isLoggedIn = Cookies.get('loggedIn') === 'true';

  if (!isLoggedIn) return <Navigate to="/" replace />;
  return children;
};

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectRoute;
