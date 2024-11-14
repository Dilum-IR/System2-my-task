import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// custom components
import InputField from "../../components/InputField";
import Loading from "../../components/Loading";
import { createToast, ToastPopup } from "../../components/ToastPopup";

// users data file
import userData from "../../data/user.json";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPassswordError] = useState("");

  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dataValidate = useCallback(() => {
    setUsernameError("");
    setPassswordError("");

    if (!username) {
      setUsernameError("Username is required!");
      return false;
    } else if (!password) {
      setPassswordError("Password is required!");
      return false;
    } else return true;
  }, [username, password]);

  const login = useCallback(
    (event) => {
      try {
        event.preventDefault();

        if (!dataValidate()) return;
        setLoading(true);
        const isUser =
          userData.username === username && userData.password === password
            ? userData
            : null;

        if (isUser) {
          createToast("Login Successful!");

          setTimeout(() => {
            navigate("/user", { state: { username: isUser.username } });
          }, 1200);
        } else {
          createToast("Invalid username or password!", 0);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    },
    [dataValidate, username, password, navigate]
  );

  return (
    <>
      <ToastPopup />
      <div className="relative flex items-center justify-center h-screen bg-violet-100">
        {loading && <Loading isloading={true} />}

        <div className="flex-col items-center p-24 rounded-lg bg-violet-200 drop-shadow-md filter">
          <h1 className="pb-5 text-4xl font-semibold text-center md:text-5xl text-violet-600">
            Welcome Back!
          </h1>

          <form onSubmit={login} className="flex flex-col items-center">
            <InputField
              title="Username"
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError}
            />
            <InputField
              title="Password"
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
    </>
  );
};

export default LoginPage;
