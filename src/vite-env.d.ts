/// <reference types="vite/client" />

interface Slug {
  _type: 'slug';
  current: string;
}

interface Cart {
  id: number;
  brand: string;
  productName: string;
  price: number;
  stripePrice: string;
  image: any;
  slug: Slug;
  quantity: number;
  size: number;
}

interface CartState {
  cart: Cart[];
  cartTotalItems: number;
  cartTotalCost: number;
}

type Product = {
  brand: string;
  productName: string;
  description: string;
  specification: string;
  price: number;
  stripePrice: string;
  image: any;
  slug: Slug;
  quantity: number;
};

type Collection = {
  data: Array;
  navheader: string;
  navelement: Array;
  category: string;
  slug: Slug;
};
