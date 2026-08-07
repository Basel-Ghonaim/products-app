export type CategoryList =
  | "beauty"
  | "fragrances"
  | "furniture"
  | "groceries"
  | "home-decoration"
  | "kitchen-accessories"
  | "laptops";

export type ProductsParams = {
  limit?: number;
  skip?: number;
  category?: CategoryList;
  sortBy?: "title" | "price" | "rating";
  order?: "asc" | "desc";
  search?: string;
  select?: string[];
};
