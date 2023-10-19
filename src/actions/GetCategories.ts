import { type Category } from "@/types";

const apiUrl = `${process.env.API_URL}/categories`;

type CategoriesResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Category[]>;
};

const getCategories = async (): Promise<Category[]> => {
  const res = (await fetch(apiUrl)) as CategoriesResponse;
  return res.json();
};

export default getCategories;
