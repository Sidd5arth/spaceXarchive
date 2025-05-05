import { useQuery } from "@tanstack/react-query";
import { fetchLaunchDetail, fetchRocketDetail } from "../api/spaceApi";

export function useLaunchDetails(launchId?: string) {
  const launchQuery = useQuery({
    queryKey: ["launchDetail", launchId],
    queryFn: () => fetchLaunchDetail(launchId!),
    enabled: !!launchId,
  });

  const rocketId = launchQuery.data?.rocket;

  const rocketQuery = useQuery({
    queryKey: ["rocketDetail", rocketId],
    queryFn: () => fetchRocketDetail(rocketId),
    enabled: !!rocketId,
  });

  return {
    launch: launchQuery.data,
    rocket: rocketQuery.data,
    isLoading: launchQuery.isLoading || rocketQuery.isLoading,
    error: launchQuery.error || rocketQuery.error,
  };
}
