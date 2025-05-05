import { useQuery } from "@tanstack/react-query";
import { fetchResources } from "../api/spaceApi";
import { useState, useMemo } from "react";

export function useFilteredResources() {
  const { data, isLoading, error } = useQuery(["resources"], fetchResources);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const filteredResources = useMemo(() => {
    if (!data) return [];

    return data.filter((resource: any) => {
      const matchesSearch = resource.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === null
          ? true
          : statusFilter === "success"
          ? resource.success === true
          : resource.success === false;

      const launchDate = new Date(resource.date_utc);
      const matchesDate =
        (!dateRange[0] || launchDate >= dateRange[0]) &&
        (!dateRange[1] || launchDate <= dateRange[1]);

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [data, searchTerm, statusFilter, dateRange]);

  return {
    isLoading,
    error,
    filteredResources,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateRange,
    setDateRange,
  };
}
