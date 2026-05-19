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
    pagination,
    filters,
    sorters,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }

    // Start with all subjects
    let filtered = [...subjectsMockData];

    // Apply filters
    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        filtered = filtered.filter((subject) => {
          const fieldValue = (subject as Record<string, unknown>)[filter.field];
          if (filter.operator === "eq") {
            return fieldValue === filter.value;
          }
          if (filter.operator === "in") {
            return (
              Array.isArray(filter.value) && filter.value.includes(fieldValue)
            );
          }
          if (filter.operator === "contains") {
            return String(fieldValue)
              .toLowerCase()
              .includes(String(filter.value).toLowerCase());
          }
          return true;
        });
      });
    }

    // Apply sorters
    if (sorters && sorters.length > 0) {
      filtered.sort((a, b) => {
        for (const sorter of sorters) {
          const aVal = (a as Record<string, unknown>)[sorter.field];
          const bVal = (b as Record<string, unknown>)[sorter.field];

          let comparison = 0;
          if (aVal < bVal) comparison = -1;
          if (aVal > bVal) comparison = 1;

          if (comparison !== 0) {
            return sorter.order === "desc" ? -comparison : comparison;
          }
        }
        return 0;
      });
    }

    // Apply pagination
    const total = filtered.length;
    let data = filtered;

    if (pagination) {
      const page = pagination.current || 1;
      const perPage = pagination.pageSize || 10;
      const start = (page - 1) * perPage;
      const end = start + perPage;
      data = filtered.slice(start, end);
    }

    return {
      data: data as unknown as TData[],
      total,
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
