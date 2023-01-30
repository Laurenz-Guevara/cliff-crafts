/// <reference types="vite/client" />

interface Slug {
  _type: 'slug';
  current: string;
}

interface Image {
  _key: string;
  _type: 'image';
  asset: Array;
}

interface Cart {
  id: number;
  brand: string;
  productName: string;
  price: number;
  image: Array<Image>;
  slug: Slug;
  quantity: number;
  size: string;
}

interface CartState {
  cart: Cart[Object];
  cartTotalItems: number;
  cartTotalCost: number;
}

interface Product {
  brand: string;
  productName: string;
  description: string;
  specification: string;
  price: number;
  size: Array;
  image: Array<Image>;
  slug: Slug;
  quantity: number;
}

interface Collection {
  data: Array;
  navheader: string;
  navelement: Array;
  category: string;
  slug: Slug;
}
