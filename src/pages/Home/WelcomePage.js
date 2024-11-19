import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

const WelcomePage = () => {
  const [userInput, setUserInput] = useState("");
  const username = Cookies.get("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("loggedIn");
    Cookies.remove("username");
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-violet-100">
      <h1 className="text-5xl font-semibold text-violet-600">
        Welcome {username ?? "user"}!
      </h1>
      <div className="mt-10 w-72">
        <InputField
          title="Type something"
          value={userInput}
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
        />
        {userInput && (
          <p className="mt-4 text-3xl text-violet-800">Hi, {userInput}</p>
        )}
        <Button label="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default WelcomePage;
