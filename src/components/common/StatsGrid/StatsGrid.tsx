import { StatsGridProps } from "../../../types/StatsDataTypes";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import classes from "./StatsGrid.module.scss";
import { icons } from "../../../utils/GetStatsDs";
import { IconLink } from "@tabler/icons-react";
const StatsGrid = ({ data, articleLink, missionPatch }: StatsGridProps) => {
  const stats = data.map((stat, index) => {
    const Icon = icons[stat.icon];
    const isLast = index === data.length - 1;

    return (
      <Paper
        withBorder
        p="xl"
        radius="xl"
        key={stat.title}
        className={isLast ? classes.widePaper : ""}
      >
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>

        <Text fz="xs" color="dimmed" mt={7}>
          {stat.description}
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "lg", cols: 3 },
        ]}
      >
        {stats}
      </SimpleGrid>
      <div className={classes.imageContainer}>
        <img
          src={missionPatch}
          alt="Mission Patch"
          className={classes.missionPatch}
        />

        {articleLink && (
          <div className={classes.articleLink}>
            <a href={articleLink} target="_blank" rel="noopener noreferrer">
              Read Article
            </a>
            <IconLink />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsGrid;
