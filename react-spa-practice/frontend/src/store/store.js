import {configureStore} from "@reduxjs/toolkit";
import eventsReducer from './features/events/eventsSlice';

const store = configureStore({
    reducer: {
        events: eventsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;