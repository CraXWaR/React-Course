import logo from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartCondex.jsx";

export default function Header() {
    const context = useContext(CartContext);
    const totalCartItem = context.items.reduce((totalItems, item) => {
        return totalItems + item.quantity;
    }, 0)

    return (<header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>ReactFood Practice app</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItem})</Button>
            </nav>
        </header>);
}