import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  const style = 'p-3 mt-8 text-xl text-center text-white bg-purple-700 rounded-lg w-36 focus:outline-none';
  const hoverStyle = 'hover:bg-purple-600';
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-violet-100">
      <p className="text-5xl font-bold text-violet-700">404 Not Found</p>
      <NavLink to="/" className={`${style} ${hoverStyle}`} replace>
        Go Back
      </NavLink>
    </div>
  );
};

export default ErrorPage;
