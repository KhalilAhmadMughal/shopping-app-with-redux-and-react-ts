import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICart } from "../utilities/types";

const initialState: ICart = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartTotalQuantity += 1;
      state.cartItems.push(action.payload);
      toast.success(`${action.payload.name} added to cart.`, {
        position: "bottom-left",
      });
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity >= 1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].cartPrice =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].quantity;

        toast.info("Increased product quantity.", {
          position: "bottom-left",
        });
      } else {
        toast.warn("Invalid Increment.", {
          position: "top-left",
        });
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        state.cartItems[itemIndex].cartPrice =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].quantity;
        toast.info("Decreased product quantity.", {
          position: "bottom-left",
        });
      } else {
        toast.warn("Invalid Decrement", {
          position: "top-left",
        });
      }
    },
    removeItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems.length > 0) {
        state.cartItems.splice(itemIndex, 1);
        state.cartTotalQuantity -= 1;
        toast.info(`${action.payload.name} removed from cart.`, {
          position: "bottom-left",
        });
      } else {
        toast.error("Can't remove this item.", {
          position: "top-left",
        });
      }
    },
    totalCounter(state, action) {
      if (state.cartItems.length > 0) {
        const cartAmounts: number[] = state.cartItems.map(
          (item) => item.cartPrice
        );
        state.cartTotalAmount = cartAmounts.reduce((a, b) => a + b);
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalCounter,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
