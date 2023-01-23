import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cart: [],
  cartTotalItems: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        brand: string;
        productName: string;
        price: number;
        image: any;
        slug: Slug;
        quantity: number;
      }>
    ) => {
      state.cartTotalItems += 1;
      const itemIndex = state.cart.findIndex(
        (item) => item.productName === action.payload.productName
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({
          id: state.cart.length,
          brand: action.payload.brand,
          productName: action.payload.productName,
          image: action.payload.image,
          price: action.payload.price,
          slug: action.payload.slug,
          quantity: 1,
        });
      }
    },

    decreaseItem: (state, action) => {
      state.cartTotalItems -= 1;
      const itemIndex = state.cart.findIndex(
        (item) => item.productName === action.payload.productName
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCartItem = state.cart.filter(
          (cart) => cart.productName !== action.payload.productName
        );

        state.cart = nextCartItem;
      }
    },
  },
});

export const { addItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
