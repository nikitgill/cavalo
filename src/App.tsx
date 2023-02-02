import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import SellPage2 from "./pages/SellPage2";
import SellPage from "./pages/SellPage";
import RCTransferPage from "./pages/RCTransferPage";
import AboutUsPage from "./pages/AboutUsPage";
import ExplorePage from "./pages/ExplorePage";
import FinanceApp from "./pages/FinanceApp";
import FinanceApp1 from "./pages/FinanceApp1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-description-page":
        title = "";
        metaDescription = "";
        break;
      case "/sell-page2":
        title = "";
        metaDescription = "";
        break;
      case "/sell-page":
        title = "";
        metaDescription = "";
        break;
      case "/rc-transfer-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/explore-page":
        title = "";
        metaDescription = "";
        break;
      case "/finance-app":
        title = "";
        metaDescription = "";
        break;
      case "/finance-app1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/product-description-page"
        element={<ProductDescriptionPage />}
      />

      <Route path="/sell-page2" element={<SellPage2 />} />

      <Route path="/sell-page" element={<SellPage />} />

      <Route path="/rc-transfer-page" element={<RCTransferPage />} />

      <Route path="/about-us-page" element={<AboutUsPage />} />

      <Route path="/explore-page" element={<ExplorePage />} />

      <Route path="/finance-app" element={<FinanceApp />} />

      <Route path="/finance-app1" element={<FinanceApp1 />} />
    </Routes>
  );
}
export default App;
