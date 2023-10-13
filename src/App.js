import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import router from "./router";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./context/Context";

function App() {
  let routes = useRoutes(router);
  const url = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [url]);
  return (
    <ContextProvider>
      <Header />
      {routes}
      <Footer />
    </ContextProvider>
  );
}

export default App;
