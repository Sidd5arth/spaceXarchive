import {
  Badge,
  Card,
  Container,
  Grid,
  Text,
  Title,
  useMantineTheme,
  rem,
  Center,
} from "@mantine/core";
import classes from "./FeatureSection.module.scss";
import { mockdata } from "../../utils/LandingPageData";

const FeatureSection = () => {
  const theme = useMantineTheme();

  return (
    <Container size="xl" py="xl" mt="3rem">
      <Center>
        <Badge variant="filled" size="lg">
          Space - x - Archive
        </Badge>
      </Center>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Explore SpaceX Data in Real Time
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Access detailed information on rockets, launches, payloads, and launch
        sites. Stay updated with the latest missions powered by the SpaceX API.
      </Text>

      <Grid mt={50}>
        {mockdata.map((feature) => (
          <Grid.Col key={feature.title} xs={12} sm={6} md={4}>
            <Card shadow="md" radius="md" className={classes.card} padding="xl">
              <feature.icon
                size={rem(50)}
                stroke={1.5}
                color={theme.colors.primary[6]}
              />
              <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
              </Text>
              <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureSection;
