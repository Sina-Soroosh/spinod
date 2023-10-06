import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";
import Register from "./pages/Register/Register";
import SearchProducts from "./pages/SearchProducts/SearchProducts";

const router = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
  { path: "/products-category/:categoryName", element: <ProductsCategory /> },
  { path: "/search/:keyWord", element: <SearchProducts /> },
  { path: "/product/:productName", element: <Product /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default router;
