import { useState } from "react";
import { useLocation } from "react-router-dom";

import InputField from "../../components/InputField";

const WelcomePage = () => {
  const [userInput, setUserInput] = useState("");

  const location = useLocation();

  const data = location.state ?? {};
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-violet-100">
      <h1 className="text-5xl font-semibold text-violet-600">
        Welcome {data.username ?? "user"}!
      </h1>
      <div className="mt-10 w-72">
        <InputField
          title="Types something"
          value={userInput}
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
        />
        {userInput && (
          <p className="mt-4 text-3xl text-violet-800">Hi, {userInput}</p>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
