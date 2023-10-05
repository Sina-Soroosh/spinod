import Index from "./pages/Index/Index";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";
import SearchProducts from "./pages/SearchProducts/SearchProducts";

const router = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
  { path: "/products-category/:categoryName", element: <ProductsCategory /> },
  { path: "/search/:keyWord", element: <SearchProducts /> },
  { path: "/product/:productName", element: <Product /> },
];

export default router;
