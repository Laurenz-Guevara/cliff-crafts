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
  image: any;
  slug: Slug;
  quantity: number;
  size: string;
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
  size: Array;
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
