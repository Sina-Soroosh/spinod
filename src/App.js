import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import router from "./router";

function App() {
  let routes = useRoutes(router);

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
