import Index from "./pages/Index/Index";
import Products from "./pages/Products/Products";

const router = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
];

export default router;
