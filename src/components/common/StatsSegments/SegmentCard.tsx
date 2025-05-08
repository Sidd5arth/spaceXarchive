import {
  Paper,
  Box,
  Center,
  Stack,
  Title,
  Text,
  Flex,
  Grid,
  Divider,
} from "@mantine/core";
import { ReactNode } from "react";

type Item = {
  icon: ReactNode;
  name: string;
  value: string;
};

type DataSection = {
  currentSegment: string;
  title: string;
  items: Item[];
};

type Props = {
  currentSegment: string;
  data: DataSection[];
};

const SegmentCard = ({ currentSegment, data }: Props) => {
  return (
    <Grid gutter="xl">
      {data
        .filter(
          (section) =>
            currentSegment === "All" ||
            section.currentSegment === currentSegment
        )
        .map((section, index) => (
          <Grid.Col key={index} xs={12} md={currentSegment === "All" ? 6 : 12}>
            <Paper
              sx={{ overflow: "hidden" }}
              withBorder
              radius="xl"
              shadow="sm"
              h="100%"
            >
              <Stack spacing="xs">
                <Title
                  order={4}
                  px="xl"
                  py="md"
                  mb="md"
                  sx={{
                    backgroundColor: "var(--mantine-color-primary-6)",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    color: "white",
                  }}
                >
                  {section.title}
                </Title>
                <Stack>
                  {section.items.map((item, i) => (
                    <>
                      <Flex key={i} justify="space-between" px="xl">
                        <Flex gap={8}>
                          <Center
                            sx={{
                              borderRadius: "2rem",
                              backgroundColor: "var(--mantine-color-primary-0)",
                              height: "2rem",
                              width: "2rem",
                            }}
                          >
                            {item.icon}
                          </Center>
                          <Center>
                            <Text size="sm" align="left">
                              <strong>{item.name}:</strong>
                            </Text>
                          </Center>
                        </Flex>
                        <Center>
                          <Text align="right" size="sm">
                            {item.value}
                          </Text>
                        </Center>
                      </Flex>
                      <Divider />
                    </>
                  ))}
                </Stack>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
    </Grid>
  );
};

export default SegmentCard;
