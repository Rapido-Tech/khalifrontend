export interface BannerImages {
  name: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
}
export interface Product {
  _id: string;
  name: string;
  images: { url: string; main: boolean }[];
  price: number;
  discount?: number;
  sizes?: string[];
  colors?: string[];
  category: string;
  description: string;
}

export interface ShopContextType {
  products: Product[];
  search: string;
  showSearch: boolean;
}

export type category = {
  _id: string;
  name: string;
  price: string;
  images: string;
};
