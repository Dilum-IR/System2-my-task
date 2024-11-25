import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a customizable input field with validation styling and error display.
 *
 * @param {string} title - Label text displayed above the input field.
 * @param {string} value - Current value of the input field.
 * @param {string} type - HTML input type (e.g., "text", "password", "email").
 * @param {Function} onChange - Callback function to handle changes in the input's value.
 * @param {string} [error = ""] - Error message to display below the input when validation fails.
 * @returns {JSX.Element} InputField component - An input field with a label and a error message.
 */

const InputField = ({ title, value, type, onChange, error = '' }) => {
  // Apply a red border when there’s an error message, otherwise keep the default border style.
  const styleBorder = error !== '' ? 'border-red-500' : '';

  // Define styles for the label and input elements.
  const style = {
    label: 'block pb-2 text-xl text-purple-700 focus:border-violet-50',
    input: `${styleBorder} px-4 border rounded-md h-14 w-full focus:outline-none focus:border-violet-600`,
  };

  return (
    <div className="w-full pb-2">
      <label htmlFor={title} className={style.label}>
        {title}
      </label>
      <input id={title} type={type} className={style.input} value={value} onChange={onChange} placeholder={title} />
      <p className="pt-1 text-red-500">{error}</p>
    </div>
  );
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

InputField.defaultProps = {
  error: '',
};

export default InputField;
