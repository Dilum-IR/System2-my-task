import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/ClipLoader";

import InputField from "../components/InputField";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPassswordError] = useState("");

  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function setData(event) {
    event.preventDefault();

    setUsernameError("");
    setPassswordError("");

    if (username === "") {
      setUsernameError("Username is required!");
      return;
    } else if (password === "") {
      setPassswordError("Password is required!");
      return;
    }

    setLoading(!loading);
    const timeout = setTimeout(() => {
      navigate("/home", { state: { username } });
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }

  return (
    <div className="relative flex items-center justify-center h-screen bg-violet-100">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <BeatLoader
            color="#ffffff"
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
          />
        </div>
      )}
      <div className="flex-col items-center p-24 rounded-lg bg-violet-200 drop-shadow-md filter">
        <h1 className="pb-5 text-4xl font-semibold text-center md:text-5xl text-violet-600">
          Welcome Back!
        </h1>

        <form onSubmit={setData} className="flex flex-col items-center">
          <InputField
            title={"Username"}
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError}
          />
          <InputField
            title={"Password"}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          <button
            type="submit"
            className="w-full py-4 mt-5 mb-2 text-xl text-white bg-purple-700 rounded-lg focus:outline-none hover:bg-purple-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
