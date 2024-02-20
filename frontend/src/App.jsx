// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layour
import RootLayout from "./components/site-layout";

// Pages
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import SuccessPage from "./pages/Success";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;
