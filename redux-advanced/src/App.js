import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react"

import Notification from "./components/UI/Notification";

import { sendCartData, fetchCartData } from './store/cart-actions';


let isInitialized = true;

function App() {
    const isCartVisible = useSelector((state) => state.ui.isVisible);
    const cart = useSelector(state => state.cart);
    const notifications = useSelector((state) => state.ui.notification);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitialized) {
            isInitialized = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (<Fragment>
        {notifications &&
            <Notification status={notifications.status} tiitle={notifications.title} message={notifications.message}/>}
        <Layout>
            {isCartVisible && <Cart/>}
            <Products/>
        </Layout>
    </Fragment>);
}

export default App;
