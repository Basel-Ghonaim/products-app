export type ProductDto = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  stock: number;
  reviews: ReviewDto[];
};

export type ReviewDto = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
