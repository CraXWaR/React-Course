import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartCondex.jsx";
import Button from "./UI/Button.jsx";
import {currencyFormatter} from "../util/price-formating.js";
import UserContext from "../store/UserContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);

    const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function closeCart() {
        userContext.closeCart();
    }

    function goToCheckout() {
        userContext.showCheckout()
    }

    return (<Modal className='cart' open={userContext.progress === 'cart'} onClose={userContext.progress ==='cart' ? closeCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartContext.items.map((item) => (<CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onIncrease={() => cartContext.addToCart(item)}
                onDecrease={() => cartContext.removeFromCart(item.id)}
            />))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={closeCart}>
                Close
            </Button>
            {cartContext.items.length > 0 && (<Button onClick={goToCheckout}>Go to Checkout</Button>)}
        </p>
    </Modal>);
}