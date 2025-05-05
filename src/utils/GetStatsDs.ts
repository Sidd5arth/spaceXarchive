import {
  IconRocket,
  IconCalendar,
  IconCheck,
  IconX,
  IconCoin,
} from "@tabler/icons-react";

export const StatsData = (launch: any, rocket: any) => {
  return [
    {
      title: "Name",
      icon: "mission",
      value: launch?.name || "N/A",
      description: `Mission name: ${launch?.name || "Not available"}`,
    },
    {
      title: "Date",
      icon: "year",
      value: new Date(launch?.date_utc).getFullYear().toString(),
      description: `Launched on ${new Date(
        launch?.date_utc
      ).toLocaleDateString()}`,
    },
    {
      title: "Rocket",
      icon: "rocket",
      value: rocket?.name || "N/A",
      description: `Rocket: ${rocket?.name || "Not available"}`,
    },
    {
      title: "Success",
      icon: launch?.success ? "success" : "failure",
      value: launch?.success ? "Successful" : "Failed",
      description: `Launch ${
        launch?.success ? "succeeded" : "failed"
      } on ${new Date(launch?.date_utc).toLocaleDateString()}`,
    },
    {
      title: "Failure Details",
      icon: "failure",
      value: launch?.failures?.[0]?.reason || "No failure",
      description: `Reason: ${
        launch?.failures?.[0]?.reason || "No failure recorded"
      }`,
    },
  ];
};

export const icons: any = {
  mission: IconRocket,
  year: IconCalendar,
  rocket: IconRocket,
  success: IconCheck,
  failure: IconX,
  coin: IconCoin,
};
