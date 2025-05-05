import {
  IconMapPin,
  IconBuilding,
  IconWorldLongitude,
  IconDashboard,
  IconSatellite,
  IconChartArcs,
} from "@tabler/icons-react";
import {
  Center,
  Loader,
  Text,
  ThemeIcon,
  Title,
  rem,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import classes from "./FeaturesTitle.module.scss";
import { fetchLaunchPadDetail } from "../../../api/spaceApi";

interface FeatureProps {
  launchPadId: string;
  desc: string;
}

export function FeaturesTitle({ launchPadId, desc }: FeatureProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["launchpad", launchPadId],
    queryFn: () => fetchLaunchPadDetail(launchPadId),
  });

  if (isLoading) {
    return (
      <Center mt="xl">
        <Loader />
      </Center>
    );
  }

  if (isError || !data) {
    return (
      <Center mt="xl">
        <Text c="red">Error fetching launchpad data</Text>
      </Center>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Title order={2} className={classes.title}>
        Launchpad Details
      </Title>
      <Text c="dimmed" mt={rem(12)}>
        {desc}
      </Text>

      <SimpleGrid
        cols={1}
        spacing={30}
        mt={rem(30)}
        breakpoints={[{ minWidth: "md", cols: 1 }]}
      >
        <div key={data.id}>
          <ThemeIcon size={44} radius="xl" variant="filled">
            <IconSatellite size={26} stroke={1.5} />
          </ThemeIcon>
          <Text size="lg" fw={500} mt={rem(8)}>
            {data.name} ({data.status})
          </Text>

          <Stack mt="xs">
            <Text size="sm">
              <IconMapPin size={14} style={{ marginRight: 6 }} />
              Location: {data.locality}, {data.region}
            </Text>
            <Text size="sm">
              <IconWorldLongitude size={14} style={{ marginRight: 6 }} />
              Timezone: {data.timezone}
            </Text>
            <Text size="sm">
              <IconBuilding size={14} style={{ marginRight: 6 }} />
              Full Name: {data.full_name}
            </Text>
            <Text size="sm">
              <IconChartArcs size={14} style={{ marginRight: 6 }} />
              Launch Attempts: {data.launch_attempts}
            </Text>
            <Text size="sm">
              <IconDashboard size={14} style={{ marginRight: 6 }} />
              Launch Successes: {data.launch_successes}
            </Text>
          </Stack>
        </div>
      </SimpleGrid>
    </div>
  );
}
