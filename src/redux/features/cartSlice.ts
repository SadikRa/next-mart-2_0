import { IProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartProduct extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: CartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: InitialState = {
  products: [],
  city: "",
  shippingAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
      } else {
        state.products.push({ ...action.payload, orderQuantity: 1 });
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.products.find((p) => p._id === action.payload.id);
      if (product) {
        product.orderQuantity = action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
