import { footerData as data } from "../../utils/FooterPageData";
import classes from "./FooterLinks.module.scss";
import Logo from "../../assets/Logo";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Container,
  Group,
  Stack,
  Text,
  Box,
  SimpleGrid,
  rem,
  Divider,
} from "@mantine/core";

export function FooterLinks() {
  const groups = data.map((group) => (
    <Box key={group.title} className={classes.wrapper}>
      <Text className={classes.title}>{group.title}</Text>
      {group.links.map((link, index) => (
        <Text<"a">
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      ))}
    </Box>
  ));

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xl">
        <Stack align="flex-start" className={classes.logo}>
          <Logo />
          <Text size="xs" c="dimmed" className={classes.description}>
            Relive every launch. Explore the legacy of SpaceX
          </Text>
        </Stack>
        <SimpleGrid spacing="xl" className={classes.groups}>
          {groups}
        </SimpleGrid>
      </Container>
      <Divider mt="1em" />
      <Container className={classes.afterFooter} size="xl">
        <Text c="dimmed" size="sm" style={{ color: "white" }}>
          © 2025 spaceX-Archive. All rights reserved.
        </Text>

        <Group className={classes.social}>
          <ActionIcon size="lg" style={{ color: "white" }} variant="unstyled">
            <IconBrandTwitter size={rem(18)} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" style={{ color: "white" }} variant="unstyled">
            <IconBrandYoutube size={rem(18)} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" style={{ color: "white" }} variant="unstyled">
            <IconBrandInstagram size={rem(18)} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
