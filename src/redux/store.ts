import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import type { CartStateProps } from "./types";


const initialState: CartStateProps = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      var newItem = action.payload;
      const item = state.items.find((item) => item.id === newItem.id);

      if (item) {
          state.items = state.items.map(i=> i.id == item.id ? ({ ...item, quantity:action.payload.quantity }) : i);
          return;
      }
      if (action.payload.quantity) {
        state.items.push(action.payload);
        state.count++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.count++;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.count--;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addItem, removeItem } = cartSlice.actions;
export default store;