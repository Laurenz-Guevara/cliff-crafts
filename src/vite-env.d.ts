/// <reference types="vite/client" />

interface Slug {
  _type: 'slug';
  current: string;
}

type Product = {
  brand: string;
  productName: string;
  description: string;
  specification: string;
  price: number;
  image: any;
  slug: Slug;
};

type Collection = {
  data: Array;
  navheader: string;
  navelement: Array;
  category: string;
  slug: Slug;
};
