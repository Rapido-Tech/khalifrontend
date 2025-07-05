import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types";

export interface CartItem extends Product {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function calculateTotals(items: CartItem[]) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          id: Date.now().toString(),
          quantity: 1,
        });
      }
      Object.assign(state, calculateTotals(state.items));
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      Object.assign(state, calculateTotals(state.items));
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      state.items = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);
      Object.assign(state, calculateTotals(state.items));
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
