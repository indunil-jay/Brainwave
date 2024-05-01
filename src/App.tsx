import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import FeaturePage from "./pages/FeaturePage";
import RoadMap from "./pages/RoadMap";
import PricePage from "./pages/PricePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/pricing" element={<PricePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
