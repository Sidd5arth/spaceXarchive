import { useMediaQuery } from "@mantine/hooks";
import {
  Title,
  Text,
  Grid,
  Paper,
  Divider,
  Stack,
  Group,
  rem,
  Badge,
  SegmentedControl,
} from "@mantine/core";
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
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

type StatsSegmentsProps = {
  rocket: any;
};

export function StatsSegments({ rocket }: StatsSegmentsProps) {
  const [currentSegment, setCurrentSegment] = useState<string>("Overview");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [segmentControl, setSegmentControl] = useState(true);
  useEffect(() => {
    if (isSmallScreen) {
      setSegmentControl(false);
      setCurrentSegment("All");
    } else {
      setSegmentControl(true);
      setCurrentSegment("Overview");
    }
  }, [isSmallScreen]);

  return (
    <Paper withBorder radius="xl" shadow="md" p="xl" mt="lg">
      <Group align="center" mb="md">
        <Group>
          <IconRocket size={rem(28)} color="teal" />
          <Title order={2}>{rocket?.name || "Unknown Rocket"}</Title>
        </Group>
        <Badge color={rocket?.active ? "teal" : "red"} size="lg">
          {rocket?.active ? "Active" : "Inactive"}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" mb="xl">
        {rocket?.description || "No description available."}
      </Text>

      {segmentControl && (
        <SegmentedControl
          radius="xl"
          size="md"
          my="2em"
          data={[
            "All",
            "Overview",
            "Size",
            "First Stage",
            "Second Stage",
            "Engines",
          ]}
          value={currentSegment}
          onChange={(segment) => setCurrentSegment(segment)}
        />
      )}
      <Grid gutter="xl">
        {(currentSegment === "All" || currentSegment === "Overview") && (
          <Grid.Col xs={12} md={6}>
            <Stack spacing="xs">
              <Title order={4}>Overview</Title>
              <Divider />
              <Text size="sm">
                <IconBuildingFactory size={14} style={{ marginRight: 6 }} />
                <strong>Company:</strong> {rocket?.company || "N/A"}
              </Text>
              <Text size="sm">
                <IconFlag size={14} style={{ marginRight: 6 }} />
                <strong>Country:</strong> {rocket?.country || "N/A"}
              </Text>
              <Text size="sm">
                <IconCalendar size={14} style={{ marginRight: 6 }} />
                <strong>First Flight:</strong> {rocket?.first_flight || "N/A"}
              </Text>
              <Text size="sm">
                <IconCurrencyDollar size={14} style={{ marginRight: 6 }} />
                <strong>Cost per Launch:</strong>{" "}
                {rocket?.cost_per_launch
                  ? `$${rocket.cost_per_launch.toLocaleString()}`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <IconPercentage size={14} style={{ marginRight: 6 }} />
                <strong>Success Rate:</strong>{" "}
                {rocket?.success_rate_pct !== undefined
                  ? `${rocket.success_rate_pct}%`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <IconTelescope size={14} style={{ marginRight: 6 }} />
                <strong>Stages:</strong> {rocket?.stages ?? "N/A"}
              </Text>
              <Text size="sm">
                <IconTelescope size={14} style={{ marginRight: 6 }} />
                <strong>Boosters:</strong> {rocket?.boosters ?? "N/A"}
              </Text>
            </Stack>
          </Grid.Col>
        )}

        {(currentSegment === "All" || currentSegment === "Size") && (
          <Grid.Col xs={12} md={6}>
            <Stack spacing="xs">
              <Title order={4}>Size & Payload</Title>
              <Divider />
              <Text size="sm">
                <IconWalk size={14} style={{ marginRight: 6 }} />
                <strong>Height:</strong>{" "}
                {rocket?.height
                  ? `${rocket.height.meters ?? "?"} m / ${
                      rocket.height.feet ?? "?"
                    } ft`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <IconWalk size={14} style={{ marginRight: 6 }} />
                <strong>Diameter:</strong>{" "}
                {rocket?.diameter
                  ? `${rocket.diameter.meters ?? "?"} m / ${
                      rocket.diameter.feet ?? "?"
                    } ft`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <IconWeight size={14} style={{ marginRight: 6 }} />
                <strong>Mass:</strong>{" "}
                {rocket?.mass
                  ? `${rocket.mass.kg ?? "?"} kg / ${rocket.mass.lb ?? "?"} lb`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <IconChartPie size={14} style={{ marginRight: 6 }} />
                <strong>Payload Weights:</strong>{" "}
                {Array.isArray(rocket?.payload_weights)
                  ? rocket.payload_weights
                      .map((p: any) => `${p.name ?? "?"}: ${p.kg ?? "?"} kg`)
                      .join(", ")
                  : "N/A"}
              </Text>
            </Stack>
          </Grid.Col>
        )}

        {(currentSegment === "All" || currentSegment === "First Stage") && (
          <Grid.Col xs={12} md={6}>
            <Stack spacing="xs">
              <Title order={4}>First Stage</Title>
              <Divider />
              <Text size="sm">
                <strong>Reusable:</strong>{" "}
                {rocket?.first_stage?.reusable ? "Yes" : "No"}
              </Text>
              <Text size="sm">
                <strong>Engines:</strong>{" "}
                {rocket?.first_stage?.engines ?? "N/A"}
              </Text>
              <Text size="sm">
                <strong>Fuel Amount:</strong>{" "}
                {rocket?.first_stage?.fuel_amount_tons ?? "N/A"} tons
              </Text>
              <Text size="sm">
                <strong>Burn Time:</strong>{" "}
                {rocket?.first_stage?.burn_time_sec ?? "N/A"} sec
              </Text>
              <Text size="sm">
                <strong>Thrust Sea Level:</strong>{" "}
                {rocket?.first_stage?.thrust_sea_level?.kN ?? "N/A"} kN
              </Text>
              <Text size="sm">
                <strong>Thrust Vacuum:</strong>{" "}
                {rocket?.first_stage?.thrust_vacuum?.kN ?? "N/A"} kN
              </Text>
            </Stack>
          </Grid.Col>
        )}

        {(currentSegment === "All" || currentSegment === "Second Stage") && (
          <Grid.Col xs={12} md={6}>
            <Stack spacing="xs">
              <Title order={4}>Second Stage</Title>
              <Divider />
              <Text size="sm">
                <strong>Reusable:</strong>{" "}
                {rocket?.second_stage?.reusable ? "Yes" : "No"}
              </Text>
              <Text size="sm">
                <strong>Engines:</strong>{" "}
                {rocket?.second_stage?.engines ?? "N/A"}
              </Text>
              <Text size="sm">
                <strong>Fuel Amount:</strong>{" "}
                {rocket?.second_stage?.fuel_amount_tons ?? "N/A"} tons
              </Text>
              <Text size="sm">
                <strong>Burn Time:</strong>{" "}
                {rocket?.second_stage?.burn_time_sec ?? "N/A"} sec
              </Text>
              <Text size="sm">
                <strong>Payload Option:</strong>{" "}
                {rocket?.second_stage?.payloads?.option_1 ?? "N/A"}
              </Text>
              <Text size="sm">
                <strong>Fairing Height:</strong>{" "}
                {rocket?.second_stage?.payloads?.composite_fairing?.height
                  ?.meters ?? "N/A"}{" "}
                m
              </Text>
              <Text size="sm">
                <strong>Fairing Diameter:</strong>{" "}
                {rocket?.second_stage?.payloads?.composite_fairing?.diameter
                  ?.meters ?? "N/A"}{" "}
                m
              </Text>
            </Stack>
          </Grid.Col>
        )}

        {(currentSegment === "All" || currentSegment === "Engines") && (
          <Grid.Col xs={12}>
            <Stack spacing="xs">
              <Title order={4}>Engines</Title>
              <Divider />
              <Text size="sm">
                <IconEngine size={14} style={{ marginRight: 6 }} />
                <strong>Type:</strong>{" "}
                {rocket?.engines?.type && rocket.engines.version
                  ? `${rocket.engines.type} (${rocket.engines.version})`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <strong>Layout:</strong> {rocket?.engines?.layout ?? "N/A"}
              </Text>
              <Text size="sm">
                <strong>ISP:</strong> Sea Level -{" "}
                {rocket?.engines?.isp?.sea_level ?? "?"}, Vacuum -{" "}
                {rocket?.engines?.isp?.vacuum ?? "?"}
              </Text>
              <Text size="sm">
                <strong>Propellants:</strong>{" "}
                {rocket?.engines?.propellant_1 && rocket.engines.propellant_2
                  ? `${rocket.engines.propellant_1}, ${rocket.engines.propellant_2}`
                  : "N/A"}
              </Text>
              <Text size="sm">
                <strong>Thrust Sea Level:</strong>{" "}
                {rocket?.engines?.thrust_sea_level?.kN ?? "N/A"} kN
              </Text>
              <Text size="sm">
                <strong>Thrust Vacuum:</strong>{" "}
                {rocket?.engines?.thrust_vacuum?.kN ?? "N/A"} kN
              </Text>
            </Stack>
          </Grid.Col>
        )}
      </Grid>
    </Paper>
  );
}
