import { type Product } from "@/types";

const apiUrl = `${process.env.API_URL}/products`;

type ProductResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Product>;
};

const getProduct = async (id: string): Promise<Product> => {
  const res = (await fetch(`${apiUrl}/${id}`)) as ProductResponse;
  return res.json();
};

export default getProduct;
