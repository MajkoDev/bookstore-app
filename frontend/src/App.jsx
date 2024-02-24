// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Apollo Client
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache 
} from "@apollo/client";

// Layout
import RootLayout from "./components/site-layout";

// Pages
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import ProductsPage from "./pages/Products";
import ProductPage from "./pages/Product";
import SuccessPage from "./pages/Success";
import CartPage from "./pages/Cart";
import TestPage from "./pages/Test";
import TestHome from "./pages/TestHome";
import TestProducts from "./pages/TestProducts";

const client = new ApolloClient({
  uri: `http://localhost:1337/graphql`,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:slug" element={<ProductPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<SuccessPage />} />

      <Route path="/test" element={<TestPage />} />
      <Route path="/test-home" element={<TestHome />} />
      <Route path="/test-products" element={<TestProducts />} />
    </Route>
  )
);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
