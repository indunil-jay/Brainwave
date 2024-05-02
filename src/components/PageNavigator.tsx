import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageTitels = {
  [key: string]: string;
};

const PageTitles: PageTitels = {
  "/": "Brainwave | Home",
  "/feature": "Brainwave | Features",
  "/pricing": "Brainwave | Pricing",
  "/how-to-use": "Brainwave | How to Use",
  "/roadmap": "Brainwave | Roadmap",
  "/signup": "Brainwave | Sign Up",
  "/signin": "Brainwave | Sign In",
};

const PageNavigator = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = PageTitles[location.pathname];
    return () => {
      document.title = "Brainwave";
    };
  }, [location]);

  return null;
};

export default PageNavigator;
