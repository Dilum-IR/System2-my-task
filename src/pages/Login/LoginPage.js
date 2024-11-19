import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// custom components
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { createToast, ToastPopup } from "../../components/ToastPopup";
import { LOGIN_URL } from "../../api/ApiConfig";

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
    async (event) => {
      try {
        event.preventDefault();

        if (!dataValidate()) return;
        setLoading(true);
        const reqBody = {
          username,
          password,
        };
        const res = await axios.post(LOGIN_URL, reqBody);

        if (res.status) {
          createToast(res.data.message);
          Cookies.set("loggedIn", "true", { expires: 7 });
          Cookies.set("username", res.data.data, { expires: 7 });

          setTimeout(() => {
            navigate("/user");
          }, 500);
        }
      } catch (error) {
        console.error(error);
        if (error.code === "ERR_NETWORK") return createToast(error.message, 0);
        createToast(error.response.data.message, 0);
      } finally {
        setLoading(false);
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
            <Button label="Login" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
