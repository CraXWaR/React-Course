import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CartProvider} from "./store/CartCondex.jsx";
import {UserContextProvider} from "./store/UserContext.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
    return (<CartProvider>
        <UserContextProvider>
            <Header/>
            <Meals/>
            <Cart/>
            <Checkout/>
        </UserContextProvider>
    </CartProvider>);
}

export default App;
