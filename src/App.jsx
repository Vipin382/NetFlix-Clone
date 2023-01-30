import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import "./styles/index.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} />
    </Routes>
  );
}

export default App;
