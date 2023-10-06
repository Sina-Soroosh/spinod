import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import router from "./router";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./context/Context";

function App() {
  let routes = useRoutes(router);

  return (
    <ContextProvider>
      <Header />
      {routes}
      <Footer />
    </ContextProvider>
  );
}

export default App;
