import {createContext, useReducer} from "react";

const CartContext = createContext({
    items: [], addToCart: (item) => {
    }, removeFromCart: (itemId) => {
    },
});

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if the item already exists in the cart
            const existingIndex = state.items.findIndex(item => item.id === action.item.id);

            if (existingIndex !== -1) {
                // Copy the existing item
                const existingItem = state.items[existingIndex];

                // Create a new updated version of the item
                const updatedItem = {
                    ...existingItem, quantity: existingItem.quantity + 1,
                };

                // Copy the items array and replace the updated item
                const updatedItems = [...state.items];
                updatedItems[existingIndex] = updatedItem;

                // Return the new state with updated items
                return {
                    ...state, items: updatedItems,
                };
            }

            // If it doesn't exist, add it with quantity = 1
            return {
                ...state, items: [...state.items, {...action.item, quantity: 1}],
            };

        case "REMOVE_FROM_CART":
            // Find the item index in the cart
            const itemIndex = state.items.findIndex(item => item.id === action.id);

            const existingItem = state.items[itemIndex];
            if (existingItem.quantity === 1) {
                // If quantity is 1 → remove item from cart
                const updatedItems = state.items.filter(item => item.id !== action.id);
                return {
                    ...state, items: updatedItems,
                };
            } else {
                // If quantity > 1 → decrease quantity by 1
                const updatedItems = [...state.items];
                const updatedItem = {
                    ...existingItem, quantity: existingItem.quantity - 1,
                };
                updatedItems[itemIndex] = updatedItem;

                return {
                    ...state, items: updatedItems,
                };
            }

        default:
            // Return current state for unknown actions
            return state;
    }
}

export function CartProvider({children}) {
    const [cartState, dispatchCart] = useReducer(cartReducer, {items: []});

    function addToCart(item) {
        dispatchCart({
            type: 'ADD_TO_CART', item,
        });
    }

    function removeFromCart(itemId) {
        dispatchCart({
            type: 'REMOVE_FROM_CART', id: itemId,
        });
    }

    const cartContext = {
        items: cartState.items, addToCart, removeFromCart,
    }

    console.log(cartContext);

    return (<CartContext value={cartContext}>{children}</CartContext>);
}

export default CartContext;
