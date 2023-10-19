import { type Product } from "@/types";
import qs from 'query-string'

const apiUrl = `${process.env.API_URL}/products`;

type ProductsResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Product[]>;
};

type ProductQuery = {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async ({ categoryId, colorId, sizeId, isFeatured }: ProductQuery): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: apiUrl,
    query: {
      categoryId,
      colorId,
      sizeId,
      isFeatured
    }
  })

  const res = (await fetch(url)) as ProductsResponse;
  return res.json();
};

export default getProducts;
