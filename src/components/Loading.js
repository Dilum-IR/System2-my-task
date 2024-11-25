import React from 'react';
import PropTypes from 'prop-types';
import BeatLoader from 'react-spinners/ClipLoader';

/**
 * Custom loading spinner component.
 * Displays a centered loading spinner overlay based on loading state.
 *
 * @param {boolean} isloading - Controls the visibility of the loading spinner.
 *                              If true, the spinner is displayed; if false, it is hidden.
 * @returns {JSX.Element} - Returns a loading spinner component centered on the screen.
 */

const Loading = ({ isloading }) => (
  <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <BeatLoader color="#ffffff" loading={isloading} size={60} aria-label="Loading Spinner" />
  </div>
);

Loading.propTypes = {
  isloading: PropTypes.bool.isRequired,
};

export default Loading;
