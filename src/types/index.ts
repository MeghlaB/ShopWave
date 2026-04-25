export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
  brand: string;
  stock: number;
  specs: Record<string, string>;
  createdAt: string;
  addedByUser?: boolean;
}

export type Category =
  | "Electronics"
  | "Audio"
  | "Wearables"
  | "Photography"
  | "Gaming"
  | "Accessories";
