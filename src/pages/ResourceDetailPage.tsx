import { StatsSegments } from "../components/common/StatsSegments/StatsSegments";
import { FeaturesTitle } from "../components/common/FeatureTitle/FeatureTitle";
import CarouselComponent from "../components/common/CardCarousel/CardCarousel";
import {
  Flex,
  Container,
  Modal,
  Paper,
  Text,
  Button,
  rem,
} from "@mantine/core";
import { NotFound } from "../components/common/NotFound/NotFound";
import StatsGrid from "../components/common/StatsGrid/StatsGrid";
import { useLaunchDetails } from "../hooks/useLaunchDetails";
import { IconRocket } from "@tabler/icons-react";
import { StatsData } from "../utils/GetStatsDs";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Loader } from "@mantine/core";

const ResourceDetailPage: React.FC = () => {
  const { launchId } = useParams();
  const { launch, rocket, isLoading, error } = useLaunchDetails(launchId);

  const [modalOpened, setModalOpened] = useState(false);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Loader size="lg" />
      </Flex>
    );
  }
  if (error) return <NotFound />;

  const statsData = StatsData(launch, rocket);

  return (
    <Container mb="3em">
      <CarouselComponent imageData={rocket?.flickr_images || []} />
      <Paper withBorder radius="xl" p="xl" mt="xl">
        <Text>{launch.details}</Text>
      </Paper>
      <StatsGrid
        data={statsData}
        articleLink={launch?.links?.article || ""}
        missionPatch={launch?.links?.patch?.small || ""}
      />
      <StatsSegments rocket={rocket} />
      <Button
        variant="filled"
        mt="lg"
        radius="xl"
        onClick={() => setModalOpened(true)}
      >
        About Launch Pad <IconRocket style={{ marginLeft: "0.5em" }} />
      </Button>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="lg"
        radius="xl"
      >
        <div style={{ padding: rem(20) }}>
          <FeaturesTitle
            launchPadId={launch.launchpad}
            desc={`Flight: ${launch?.name}`}
          />
        </div>
      </Modal>
    </Container>
  );
};

export default ResourceDetailPage;
