import {createSlice} from "@reduxjs/toolkit";

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        list: [],
    },
    reducers: {
        setEvents: (state, action) => {
            state.list = action.payload;
        },
        addEvent: (state, action) => {
            state.list.push(action.payload);
        },
        editEvent: (state, action) => {
            const index = state.list.findIndex((item) => item.id === action.payload);
            if (index ==! -1) {
                state.list[index] = action.payload;
            }
        },
        deleteEvent: (state, action) => {
            state.list = state.list.filter((item) => item.id === action.payload);
        }
    }
});

export const {setEvents, addEvent, editEvent, deleteEvent} = eventsSlice.actions;
export default eventsSlice.reducer;