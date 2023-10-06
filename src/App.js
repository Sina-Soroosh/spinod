import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import router from "./router";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContext";

function App() {
  let routes = useRoutes(router);

  return (
    <CartContextProvider>
      <Header />
      {routes}
      <Footer />
    </CartContextProvider>
  );
}

export default App;
