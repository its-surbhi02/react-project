// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items.pop();
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


// utils/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const existing = state.items.find((i) => i.id === itemId);
      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((i) => i.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
