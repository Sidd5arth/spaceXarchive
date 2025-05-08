import { useFullscreen, useMediaQuery } from "@mantine/hooks";
import {
  Title,
  Text,
  Grid,
  Paper,
  Divider,
  Stack,
  Group,
  rem,
  Center,
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
import SegmentCard from "./SegmentCard";
import SegmentData from "./data";

type StatsSegmentsProps = {
  rocket: any;
};

export function StatsSegments({ rocket }: StatsSegmentsProps) {
  const [currentSegment, setCurrentSegment] = useState<string>("Overview");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [segmentControl, setSegmentControl] = useState(true);
  const rocketData = SegmentData(rocket);
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
    <Paper withBorder radius="xl" shadow="md" px="xl" py="md" mt="lg">
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
      <Center>
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
            bg="var(--mantine-color-primary-0)"
            value={currentSegment}
            onChange={(segment) => setCurrentSegment(segment)}
          />
        )}
      </Center>
      <SegmentCard currentSegment={currentSegment} data={rocketData} />
    </Paper>
  );
}
