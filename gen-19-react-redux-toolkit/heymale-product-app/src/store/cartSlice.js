import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price, image, qty } = action.payload;
      const existingItem = state.dataCo.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += qty;
      } else {
        state.dataCo.push({ id, name, price, image, qty });
      }
    },
    delFromCart(state, action) {
      const itemId = action.payload;
      state.dataCo = state.dataCo.filter((item) => item.id !== itemId);
    },
    increaseQty(state, action) {
      const itemId = action.payload;
      const item = state.dataCo.find((item) => item.id === itemId);
      if (item) {
        item.qty += 1;
      }
    },
    decreaseQty(state, action) {
      const itemId = action.payload;
      const item = state.dataCo.find((item) => item.id === itemId);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, delFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
