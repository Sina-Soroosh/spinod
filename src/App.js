import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import router from "./router";
import Footer from "./components/Footer/Footer";

function App() {
  let routes = useRoutes(router);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;
