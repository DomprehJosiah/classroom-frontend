import type {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
import { subjectsMockData } from "@/mocks/subjectsMockData";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: subjectsMockData as unknown as TData[],
      total: subjectsMockData.length,
    };
  },
  getOne: async () => {
    throw new Error("this function is not present in mock data provider");
  },
  create: async () => {
    throw new Error("this function is not present in mock data provider");
  },
  update: async () => {
    throw new Error("this function is not present in mock data provider");
  },
  deleteOne: async () => {
    throw new Error("this function is not present in mock data provider");
  },

  getApiUrl: () => "",
};
