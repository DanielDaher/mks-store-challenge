export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseBase {
  products: IProduct[];
  count: number;
}

export interface IProductsParameters {
  rows?: number;
  page?: number;
  sortBy?: "id" | "name" | "price";
  orderBy?: "DESC" | "ASC";
}