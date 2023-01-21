import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cart: [],
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
      }>
    ) => {
      state.cart.push({
        id: state.cart.length,
        brand: action.payload.brand,
        productName: action.payload.productName,
        image: action.payload.image,
        price: action.payload.price,
        slug: action.payload.slug,
      });
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
