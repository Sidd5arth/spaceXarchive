import { IconHeart, IconBrandYoutube } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import classes from "./BadgeCard.module.scss";
import { useState } from "react";
import { Badge, Button, Card, Group, Image, Text, Stack } from "@mantine/core";

interface Badge {
  emoji: string;
  label: string;
}

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: Badge[];
  youtube: string;
  id: string;
}

const BadgeCard = ({
  image,
  title,
  description,
  badges,
  youtube,
  id,
}: BadgeCardProps) => {
  const navigate = useNavigate();

  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  const handleExplore = () => {
    const launchId = id;
    if (badges.length > 0) {
      navigate(`/resources/${launchId}`);
    }
  };

  return (
    <>
      <Card
        withBorder
        radius="xl"
        padding="md"
        className={classes.card}
        c="black"
        bg="primary.0"
      >
        <Card.Section
          style={{ backgroundColor: "var(--mantine-color-primary-0)" }}
        >
          <Image
            src={image}
            alt={title}
            fit="contain"
            height={180}
            mx="auto"
            radius="sm"
            p="md"
          />
        </Card.Section>

        <Stack spacing="xs" mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
          </Group>
          <Text fz="sm" className={classes.description}>
            {description}
          </Text>
        </Stack>

        <Stack spacing={5} mt="md">
          <Text fz="sm" c="dimmed">
            About Launch
          </Text>
          <Group spacing={7}>{features}</Group>
        </Stack>

        <Group mt="md" grow>
          <Button
            variant="light"
            radius="xl"
            leftIcon={<IconBrandYoutube size={18} />}
            onClick={() => window.open(youtube, "_blank")}
          >
            Youtube
          </Button>
          <Button radius="xl" onClick={handleExplore}>
            <IconHeart stroke={1.5} size={18} style={{ marginRight: 4 }} />
            Explore
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default BadgeCard;
