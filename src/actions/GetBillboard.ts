import { type Billboard } from "@/types";

const apiUrl = `${process.env.API_URL}/billboards`;

type BillboardResponse = Omit<Response, "json"> & {
  status: 200;
  json: () => PromiseLike<Billboard>;
};

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = (await fetch(`${apiUrl}/${id}`)) as BillboardResponse;
  return res.json();
};

export default getBillboard;
