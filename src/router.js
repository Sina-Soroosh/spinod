import Index from "./pages/Index/Index";
import Products from "./pages/Products/Products";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";

const router = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
  { path: "/products-category/:categoryName", element: <ProductsCategory /> },
];

export default router;
