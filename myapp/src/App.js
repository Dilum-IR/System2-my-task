import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
