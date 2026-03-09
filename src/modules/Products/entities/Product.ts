export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  isAvailable: boolean;
  hasDiscount: boolean;
  discountPercentage: number;
  reviews: Review[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewer: {
    name: string;
    email: string;
  };
}
