import { type Size } from "@/types";

const apiUrl = `${process.env.API_URL}/sizes`;

type SizesResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Size[]>;
};

const getSizes = async (): Promise<Size[]> => {
  const res = (await fetch(apiUrl)) as SizesResponse;
  return res.json();
};

export default getSizes;
