import {
  IconRocket,
  IconFlag,
  IconBuildingFactory,
  IconCalendar,
  IconCurrencyDollar,
  IconPercentage,
  IconWeight,
  IconTelescope,
  IconEngine,
  IconWalk,
  IconChartPie,
  Icon3dRotate,
} from "@tabler/icons-react";

const SegmentData = (rocket: any) => {
  return [
    {
      currentSegment: "Overview",
      title: "Overview",
      items: [
        {
          icon: <IconBuildingFactory size={14} />,
          name: "Company",
          value: rocket?.company || "N/A",
        },
        {
          icon: <IconFlag size={14} />,
          name: "Country",
          value: rocket?.country || "N/A",
        },
        {
          icon: <IconCalendar size={14} />,
          name: "First Flight",
          value: rocket?.first_flight || "N/A",
        },
        {
          icon: <IconCurrencyDollar size={14} />,
          name: "Cost per Launch",
          value: rocket?.cost_per_launch
            ? `$${rocket.cost_per_launch.toLocaleString()}`
            : "N/A",
        },
        {
          icon: <IconPercentage size={14} />,
          name: "Success Rate",
          value:
            rocket?.success_rate_pct !== undefined
              ? `${rocket.success_rate_pct}%`
              : "N/A",
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Stages",
          value: rocket?.stages ?? "N/A",
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Boosters",
          value: rocket?.boosters ?? "N/A",
        },
      ],
    },

    {
      currentSegment: "First Stage",
      title: "First Stage",
      items: [
        {
          icon: <IconRocket size={14} />,
          name: "Reusable",
          value: rocket?.first_stage?.reusable ? "Yes" : "No",
        },
        {
          icon: <IconEngine size={14} />,
          name: "Engines",
          value: rocket?.first_stage?.engines ?? "N/A",
        },
        {
          icon: <IconWeight size={14} />,
          name: "Fuel Amount",
          value: `${rocket?.first_stage?.fuel_amount_tons ?? "N/A"} tons`,
        },
        {
          icon: <IconCalendar size={14} />,
          name: "Burn Time",
          value: `${rocket?.first_stage?.burn_time_sec ?? "N/A"} sec`,
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Thrust Sea Level",
          value: `${rocket?.first_stage?.thrust_sea_level?.kN ?? "N/A"} kN`,
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Thrust Vacuum",
          value: `${rocket?.first_stage?.thrust_vacuum?.kN ?? "N/A"} kN`,
        },
      ],
    },
    {
      currentSegment: "Second Stage",
      title: "Second Stage",
      items: [
        {
          icon: <IconRocket size={14} />,
          name: "Reusable",
          value: rocket?.second_stage?.reusable ? "Yes" : "No",
        },
        {
          icon: <IconEngine size={14} />,
          name: "Engines",
          value: rocket?.second_stage?.engines ?? "N/A",
        },
        {
          icon: <IconWeight size={14} />,
          name: "Fuel Amount",
          value: `${rocket?.second_stage?.fuel_amount_tons ?? "N/A"} tons`,
        },
        {
          icon: <IconCalendar size={14} />,
          name: "Burn Time",
          value: `${rocket?.second_stage?.burn_time_sec ?? "N/A"} sec`,
        },
        {
          icon: <IconChartPie size={14} />,
          name: "Payload Option",
          value: rocket?.second_stage?.payloads?.option_1 ?? "N/A",
        },
        {
          icon: <IconWalk size={14} />,
          name: "Fairing Height",
          value: `${
            rocket?.second_stage?.payloads?.composite_fairing?.height?.meters ??
            "N/A"
          } m`,
        },
        {
          icon: <Icon3dRotate size={14} />,
          name: "Fairing Diameter",
          value: `${
            rocket?.second_stage?.payloads?.composite_fairing?.diameter
              ?.meters ?? "N/A"
          } m`,
        },
      ],
    },
    {
      currentSegment: "Engines",
      title: "Engines",
      items: [
        {
          icon: <IconEngine size={14} />,
          name: "Type",
          value:
            rocket?.engines?.type && rocket.engines.version
              ? `${rocket.engines.type} (${rocket.engines.version})`
              : "N/A",
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Layout",
          value: rocket?.engines?.layout ?? "N/A",
        },
        {
          icon: <IconPercentage size={14} />,
          name: "ISP",
          value: `Sea Level - ${
            rocket?.engines?.isp?.sea_level ?? "?"
          }, Vacuum - ${rocket?.engines?.isp?.vacuum ?? "?"}`,
        },
        {
          icon: <IconChartPie size={14} />,
          name: "Propellants",
          value:
            rocket?.engines?.propellant_1 && rocket.engines.propellant_2
              ? `${rocket.engines.propellant_1}, ${rocket.engines.propellant_2}`
              : "N/A",
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Thrust Sea Level",
          value: `${rocket?.engines?.thrust_sea_level?.kN ?? "N/A"} kN`,
        },
        {
          icon: <IconTelescope size={14} />,
          name: "Thrust Vacuum",
          value: `${rocket?.engines?.thrust_vacuum?.kN ?? "N/A"} kN`,
        },
      ],
    },
    {
      currentSegment: "Size",
      title: "Size",
      items: [
        {
          icon: <IconWalk size={14} />,
          name: "Height",
          value: rocket?.height
            ? `${rocket.height.meters ?? "?"} m / ${
                rocket.height.feet ?? "?"
              } ft`
            : "N/A",
        },
        {
          icon: <Icon3dRotate size={14} />,
          name: "Diameter",
          value: rocket?.diameter
            ? `${rocket.diameter.meters ?? "?"} m / ${
                rocket.diameter.feet ?? "?"
              } ft`
            : "N/A",
        },
        {
          icon: <IconWeight size={14} />,
          name: "Mass",
          value: rocket?.mass
            ? `${rocket.mass.kg ?? "?"} kg / ${rocket.mass.lb ?? "?"} lb`
            : "N/A",
        },
        // {
        //   icon: <IconChartPie size={14} />,
        //   name: "Payload Weights",
        //   value: Array.isArray(rocket?.payload_weights)
        //     ? rocket.payload_weights
        //         .map((p: any) => `${p.name ?? "?"}: ${p.kg ?? "?"} kg`)
        //         .join(", ")
        //     : "N/A",
        // },
      ],
    },
  ];
};

export default SegmentData;
