import { IProductsParameters, IResponseBase } from "@/types/api";
import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
});

export const getProducsFromAPI = async ({
  rows = 8,
  page = 1,
  sortBy = "id",
  orderBy = "DESC",
}: IProductsParameters): Promise<IResponseBase> => {
  const { data } = await api.get<IResponseBase>(
    `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return data as IResponseBase;
};