import { useLocation} from "react-router-dom";

function WelcomePage() {
  const location = useLocation();

  const data = location.state ?? {};
  return (
    <div className="flex items-center justify-center w-full h-screen bg-violet-100">
      <h1 className="text-5xl font-semibold text-violet-600">
        Welcome {data.username ?? "null"}!
      </h1>
    </div>
  );
}

export default WelcomePage;
