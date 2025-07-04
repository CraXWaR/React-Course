import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", initialState: {
        items: [], totalQuantity: 0, totalPrice: 0, changed: false,
    }, reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title
                });
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        }, removeFromCart: (state, action) => {
            state.totalQuantity--;
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;