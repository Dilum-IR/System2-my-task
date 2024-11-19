/**
 * Renders a customizable button with click handling.
 *
 * @param {string} label - Text displayed on the button.
 * @param {string} [type = "button"] - Button type (e.g., "button", "submit", "reset").
 * @param {Function} [onClick= ()=>{}] -  Optional callback function executed when the button is clicked.
 * @returns {JSX.Element} Button component - A styled, reusable button.
 */

const Button = ({ label, type = "button", onClick = () => {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-4 mt-5 mb-2 text-lg text-white bg-purple-700 rounded-lg focus:outline-none hover:bg-purple-600"
    >
      {label}
    </button>
  );
};
export default Button;
