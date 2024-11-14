import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Function to trigger a toast notification.
 * Defines the message and type of notification.
 *
 * @param {string} message - The message to be displayed in the toast notification.
 * @param {number} [ type = 1 ] - The type of notification to display:
 *                             0 = error (red),
 *                             1 = success (green),
 *                             2 = warning (yellow),
 *                             default = info (blue).
 * @returns {void} - create a customizable toast notification.
 */

export const createToast = (message, type = 1) => {
  // Configuration default settings for the toast notification.
  const attribute = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  switch (type) {
    case 0:
      return toast.error(message, attribute);
    case 1:
      return toast.success(message, attribute);
    case 2:
      return toast.warning(message, attribute);
    default:
      return toast.info(message, attribute);
  }
};

/**
 * Renders the container required to display toast notifications.
 * Place this component at the root of your application or at a high level in the component tree.
 *
 * @returns {JSX.Element} ToastContainer - The container to manage toast notifications.
 */

export const ToastPopup = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
