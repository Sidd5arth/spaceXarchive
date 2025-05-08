import {
  Container,
  Paper,
  Title,
  Text,
  Select,
  Group,
  Stack,
  useMantineTheme,
  Loader,
  Flex,
  Box,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { DatePickerInput } from "@mantine/dates";
import { NotFound } from "../components/common/NotFound/NotFound";
import PaginatedList from "../components/common/PaginationList";
import BadgeCard from "../components/common/Card/BadgeCard";
import SearchInput from "../components/common/SearchInput";
import { useFilteredResources } from "../hooks/useFilteredResource";
import animationData from "../Lottie/Animation.json";
import Lottie from "lottie-react";

const ResourceListPage: React.FC = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const {
    isLoading,
    error,
    filteredResources,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateRange,
    setDateRange,
  } = useFilteredResources();

  if (isLoading)
    return (
      <Flex justify="center" align="center" h="100vh">
        <Loader size="lg" />
      </Flex>
    );
  if (error) return <NotFound />;

  return (
    <Container mb="3em">
      <Paper mt="lg">
        <Paper shadow="sm" radius="xl" p="xl" mb="xl" withBorder>
          <Flex
            align="center"
            justify="space-between"
            direction={{ base: "column", sm: "row" }}
            gap="xl"
          >
            <Box maw={480}>
              <Stack spacing="sm">
                <Title
                  order={1}
                  sx={(theme) => ({
                    fontSize: "1.75rem",

                    [theme.fn.largerThan("sm")]: {
                      fontSize: "2.25rem",
                    },
                    [theme.fn.largerThan("md")]: {
                      fontSize: "3rem",
                    },
                  })}
                >
                  Explore Launch Resources
                </Title>
                <Text c="dimmed" size="sm" w="80%">
                  Browse historical launch data and mission highlights. View
                  rocket specs, payloads, and launch sites. Discover key
                  milestones in space exploration.
                </Text>
              </Stack>
            </Box>

            <Box
              w={{ base: "100%", sm: rem(250), md: rem(300) }}
              h={{ base: rem(200), sm: rem(250), md: rem(300) }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              pt="1.5rem"
            >
              <Box w="100%" h="100%">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Flex>
        </Paper>

        {isMobile ? (
          <Stack spacing="md" mb="md">
            <SearchInput
              placeholder="Search resources..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              placeholder="Filter by status"
              data={[
                { label: "Success", value: "success" },
                { label: "Failure", value: "failure" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
            />
            <DatePickerInput
              type="range"
              placeholder="Filter by date range"
              value={dateRange}
              onChange={setDateRange}
            />
          </Stack>
        ) : (
          <Group grow mb="md">
            <SearchInput
              placeholder="Search resources..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              placeholder="Filter by status"
              data={[
                { label: "Success", value: "success" },
                { label: "Failure", value: "failure" },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
            />
            <DatePickerInput
              type="range"
              placeholder="Filter by date range"
              value={dateRange}
              onChange={setDateRange}
            />
          </Group>
        )}

        <PaginatedList
          items={filteredResources}
          itemsPerPage={6}
          renderItem={(resource: any) => (
            <div
              key={resource.id}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <BadgeCard
                image={resource.links.patch.small}
                title={resource.name}
                description={resource.details || "No description available."}
                badges={[
                  {
                    emoji: "Flight Number",
                    label: resource.flight_number.toString(),
                  },
                  { emoji: "Success", label: resource.success ? "✅" : "❌" },
                  {
                    emoji: "Launched on",
                    label: new Date(resource.date_utc).toDateString(),
                  },
                ]}
                country={resource.links.article}
                youtube={resource.links.webcast}
                id={resource.id}
              />
            </div>
          )}
        />
      </Paper>
    </Container>
  );
};

export default ResourceListPage;
