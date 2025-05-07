import { LandingPageData as data } from "../utils/LandingPageData";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import NewsLetter from "../components/NewsLetterSection/NewsLetter";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      size="lg"
      bg="var(--mantine-color-body)"
      px={0}
      style={{ overflow: "hidden" }}
      fluid
    >
      <Container h="100vh" mah={950} pos="relative" size="xl">
        <Box
          pos="absolute"
          top={0}
          left={0}
          h="100%"
          w="100%"
          className="horizontal-backdrop"
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          h="100%"
          w="100%"
          className="vertical-backdrop"
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          h="100%"
          w="100%"
          bg="var(--mantine-color-body)"
          style={{ zIndex: 1 }}
          opacity={0.85}
        />
        <Flex
          h="100%"
          w="60%"
          align="center"
          pos="relative"
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              width: "100%",
            },
          })}
        >
          <Stack
            maw="var(--mantine-breakpoint-sm)"
            sx={(theme) => ({
              width: "100%",
              zIndex: 10,
              [theme.fn.largerThan("sm")]: {
                width: "80%",
              },
            })}
          >
            {data.badge && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1 }}
              >
                <Badge variant="light" size="xl" mb="lg">
                  {data.badge}
                </Badge>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text
                sx={(theme) => ({
                  fontSize: "2.1em",
                  fontWeight: 800,
                  width: "100%",
                  [theme.fn.largerThan("sm")]: {
                    fontSize: "2.78em",
                  },
                })}
              >
                {data.title}
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Text fz="md" c="dimmed">
                {data.description}
              </Text>
            </motion.div>
            <Group mt="lg">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    component="a"
                    onClick={() => navigate("/resources")}
                    radius="xl"
                    size="lg"
                    className="cta"
                    rightIcon={<IconArrowRight />}
                  >
                    {data.callToAction.label || ""}
                  </Button>
                </motion.div>
              </motion.div>
            </Group>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Group mt="md">
                {data.avatarItems.map((avatarItem, index) => (
                  <Avatar key={index} src={avatarItem.src} />
                ))}
                <Stack>
                  {data.rating && <Rating value={data.rating} />}
                  {data.ratingLabel && (
                    <Text fz="sm" c="dimmed">
                      {data.ratingLabel}
                    </Text>
                  )}
                </Stack>
              </Group>
            </motion.div>
          </Stack>
        </Flex>
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          sx={(theme) => ({
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "block",
            [theme.fn.largerThan("md")]: {
              display: "none",
            },
          })}
        />

        <Grid
          gutter="lg"
          w={data.imageGridItemSize.width * 3 + 60}
          pos="absolute"
          bottom={40}
          right={-30}
          style={{
            transform: "rotate(8deg)",
          }}
        >
          {data.imageGridItems.map((gridItemsColumn, rowIndex) => (
            <Grid.Col
              span={Math.floor(12 / data.imageGridItems.length)}
              key={rowIndex}
            >
              <Stack>
                {gridItemsColumn.map((gridItem, itemIndex) => (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: itemIndex * 0.2 }}
                    key={itemIndex}
                    style={{
                      background: "var(--mantine-color-primary-0)",
                      borderRadius: "1em",
                      boxShadow: "10px 10px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Image
                      width="100%"
                      height="100%"
                      src={gridItem.src}
                      alt={gridItem.alt}
                      radius="xl"
                      style={{ scale: "0.8" }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <FeatureSection />
      <NewsLetter />
    </Container>
  );
};

export default LandingPage;
