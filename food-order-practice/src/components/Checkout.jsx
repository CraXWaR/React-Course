import Modal from "./UI/Modal.jsx";
import {currencyFormatter} from "../util/price-formating.js";
import CartContext from "../store/CartCondex.jsx";
import UserContext from "../store/UserContext.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import {useContext, useActionState} from "react";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
    method: "POST", headers: {
        'Content-Type': 'application/json',
    },
}

export default function Checkout() {
    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);

    const {data, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartContext.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function closeForm() {
        userContext.closeCheckout();
    }

    function finishForm() {
        userContext.closeCheckout();
        cartContext.clearCart();
        clearData();
    }

    async function onCheckout(prevState, formData) {
        const customerData = Object.fromEntries(formData.entries());

        await sendRequest(JSON.stringify({
            order: {
                items: cartContext.items, customer: customerData,
            }
        }));
    }

    const [formState, formAction, pending] = useActionState(onCheckout, null);

    let actions = (<>
        <Button type="button" textOnly onClick={closeForm}>
            Close
        </Button>
        <Button>Submit Order</Button>
    </>);

    if (pending) {
        actions = (<span>Sending order data...</span>)
    }

    if (data && !error) {
        return <Modal open={userContext.progress === 'checkout'} onClose={closeForm}>
            <h2>Success!</h2>
            <p>Order was submitted!</p>
            <p>Please stay in touch!</p>
            <p className='modal-actions'>
                <Button onClick={finishForm}>Okey</Button>
            </p>
        </Modal>
    }

    return (<Modal open={userContext.progress === 'checkout'} onClose={closeForm}>
        <form action={formAction}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" type="text" id="name"/>
            <Input label="E-Mail Address" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>

            {error && <Error title='Failed to submit order. Please try again later!' message={error}/>}

            <p className="modal-actions">{actions}</p>
        </form>
    </Modal>);
}