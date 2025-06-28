import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const routes = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{index: true, exact: true, name: "Home", element: <Home/>}, {
        path: "products", exact: true, name: "Products", element: <Products/>
    }, {path: "products/:id", exact: true, name: "Product Details", element: <ProductDetails/>},],
}]);


function App() {
    return <RouterProvider router={routes}/>;
}

export default App;
