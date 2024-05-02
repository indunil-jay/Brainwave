import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage";
import PageNavigator from "./components/PageNavigator";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const FeaturePage = lazy(() => import("./pages/FeaturePage"));
const RoadMap = lazy(() => import("./pages/RoadMap"));
const PricePage = lazy(() => import("./pages/PricePage"));
const HowToUsePage = lazy(() => import("./pages/HowToUsePage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <PageNavigator />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/pricing" element={<PricePage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
