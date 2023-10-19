import { type Color } from "@/types";

const apiUrl = `${process.env.API_URL}/colors`;

type ColorsResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Color[]>;
};

const getColors = async (): Promise<Color[]> => {
  const res = (await fetch(apiUrl)) as ColorsResponse;
  return res.json();
};

export default getColors;
