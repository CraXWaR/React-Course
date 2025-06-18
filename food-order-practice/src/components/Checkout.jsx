import Modal from "./UI/Modal.jsx";
import {currencyFormatter} from "../util/price-formating.js";
import CartContext from "../store/CartCondex.jsx";
import UserContext from "../store/UserContext.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import {useContext} from "react";

export default function Checkout() {
    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);

    const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function closeForm() {
        userContext.closeCheckout();
    }

    function submitForm(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        fetch('http://localhost:3000/orders', {
            method: 'POST', headers: {
                'Content-Type': 'application/json', // Tells backend we're sending JSON
            }, body: JSON.stringify({
                order: {
                    items: cartContext.items,
                    customer: customerData,
                }
            }),
        })
    }

    return (<Modal open={userContext.progress === 'checkout'} onClose={closeForm}>
            <form onSubmit={submitForm}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="name"/>
                <Input label="E-Mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>

                <p className="modal-actions">
                    <Button type="button" textOnly onClick={closeForm}>
                        Close
                    </Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>);
}