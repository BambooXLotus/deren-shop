import { type Category } from "@/types";

const apiUrl = `${process.env.API_URL}/categories`;

type CategoryResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Category>;
};

const getCategory = async (id: string): Promise<Category> => {
  const res = (await fetch(`${apiUrl}/${id}`)) as CategoryResponse;
  return res.json();
};

export default getCategory;
