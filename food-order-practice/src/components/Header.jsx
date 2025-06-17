import logo from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartCondex.jsx";
import UserContext from "../store/UserContext.jsx";

export default function Header() {
    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);

    const totalCartItem = cartContext.items.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0);

    function renderCart() {
        userContext.showCart();
    }

    return (<header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>ReactFood Practice app</h1>
            </div>
            <nav>
                <Button textOnly onClick={renderCart}>Cart ({totalCartItem})</Button>
            </nav>
        </header>);
}