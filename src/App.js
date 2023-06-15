import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PayForProduct from "./pages/PayForProduct";
import PayForProduct1 from "./pages/PayForProduct1";
import PayForProduct2 from "./pages/PayForProduct2";
import PayForProduct3 from "./pages/PayForProduct3";
import PayForProduct4 from "./pages/PayForProduct4";
import PayForProduct5 from "./pages/PayForProduct5";
import Integrations from "./pages/Integrations";
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
      case "/pay-for-product":
        title = "";
        metaDescription = "";
        break;
      case "/pay-for-product1":
        title = "";
        metaDescription = "";
        break;
      case "/pay-for-product2":
        title = "";
        metaDescription = "";
        break;
      case "/pay-for-product3":
        title = "";
        metaDescription = "";
        break;
      case "/pay-for-product4":
        title = "";
        metaDescription = "";
        break;
      case "/integrations":
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
       <Route path="" element={<Integrations />} />
      <Route path="/pay-for-product" element={<PayForProduct />} />
      <Route path="/pay-for-product1" element={<PayForProduct1 />} />
      <Route path="/pay-for-product2" element={<PayForProduct2 />} />
      <Route path="/pay-for-product3" element={<PayForProduct3 />} />
      <Route path="/pay-for-product4" element={<PayForProduct4 />} />
      <Route path="/pay-for-product5" element={<PayForProduct5 />} />
     
    </Routes>
  );
}
export default App;
