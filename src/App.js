import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPhone from "./pages/LoginPhone";
import SignInPhone from "./pages/SignInPhone";
import LanderPhone from "./pages/LanderPhone";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-phone":
        title = "";
        metaDescription = "";
        break;
      case "/-lander-phone":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPhone />} />

      <Route path="/sign-in-phone" element={<SignInPhone />} />

      <Route path="/-lander-phone" element={<LanderPhone />} />
    </Routes>
  );
}
export default App;
