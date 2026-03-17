export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ProductType {
  _id: string;
  id: string;

  title: string;
  slug: string;
  description: string;

  price: number;
  quantity: number;
  sold: number;

  imageCover: string;
  images: string[];

  category: ICategory;
  subcategory: ISubcategory[];
  brand: IBrand;

  ratingsAverage: number;
  ratingsQuantity: number;

  createdAt: string;
  updatedAt: string;
  priceAfterDiscount: number;
  reviews: IReview[];
}

export interface IUser {
  _id: string;
  name: string;
}

export interface IReview {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}
