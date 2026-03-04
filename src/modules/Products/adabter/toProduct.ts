import type { ProductDto } from "../dto/Product";
import type { Product } from "../entities/Product";

export const toProduct = (products: ProductDto[]): Product[] => {
  return products.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    image: product.thumbnail,
    isAvailable: product.stock > 0,
    hasDiscount: false,
    reviews: product.reviews.map((review) => ({
      rating: review.rating,
      comment: review.comment,
      date: review.date,
      reviewer: {
        name: review.reviewerName,
        email: review.reviewerEmail,
      },
    })),
  }));
};
