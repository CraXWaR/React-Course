import {createContext, useContext, useState} from "react";

const UserContext = createContext({
    progress: '',
    showCart: () => {
    },
    closeCart: () => {
    },
    showCheckout: () => {
    },
    closeCheckout: () => {
    },
});

export function UserContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function closeCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function closeCheckout() {
        setUserProgress('');
    }

    const context = {
        progress: userProgress,
        showCart,
        closeCart,
        showCheckout,
        closeCheckout,
    }

    return (<UserContext value={context}>{children}</UserContext>);
}

export default UserContext;