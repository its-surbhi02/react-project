import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore ({
    reducer: {
        cart: cartSlice,
    },

});

export default store;
//1:52:00