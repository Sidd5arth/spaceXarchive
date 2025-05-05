export type SortDirection = "asc" | "desc";

export interface QueryOptions<T> {
  data: T[];
  searchTerm?: string;
  searchKeys?: (keyof T)[];
  sortKey?: keyof T;
  sortDirection?: SortDirection;
}

/**
 * Filter and sort a dataset based on query options.
 */
export function queryResources<T>({
  data,
  searchTerm,
  searchKeys = [],
  sortKey,
  sortDirection = "asc",
}: QueryOptions<T>): T[] {
  let result = [...data];

  // Search
  if (searchTerm) {
    const lower = searchTerm.toLowerCase();
    result = result.filter((item) =>
      searchKeys.some((key) => {
        const value = item[key];
        return typeof value === "string" && value.toLowerCase().includes(lower);
      })
    );
  }

  // Sort
  if (sortKey) {
    result.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
  }

  return result;
}
