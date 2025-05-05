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
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { DatePickerInput } from "@mantine/dates";
import { NotFound } from "../components/common/NotFound/NotFound";
import PaginatedList from "../components/common/PaginationList";
import BadgeCard from "../components/common/Card/BadgeCard";
import SearchInput from "../components/common/SearchInput";
import { useFilteredResources } from "../hooks/useFilteredResource";

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
        <Paper
          shadow="sm"
          radius="xl"
          p="xl"
          mb="md"
          withBorder
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <Title order={2}>Explore Launch Resources</Title>
          <Text c="dimmed" size="sm">
            Browse through historical space launch data and mission details.
          </Text>
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
