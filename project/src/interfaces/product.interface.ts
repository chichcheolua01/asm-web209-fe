import { ICategory } from "./category.interface";
export interface IProduct {
  _id: string;
  name: string;
  slug?: string;
  thumb: string | File;
  images: string | string[] | File[];
  price: number;
  description: string;
  categoryId?: ICategory | string;
  quantity?: number;
}
