import { Button, Container, Center, Text, Title } from "@mantine/core";
import classes from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL or your internet is
        down.
      </Text>
      <Center>
        <Button
          onClick={() => navigate("/resources")}
          variant="filled"
          size="md"
        >
          Take me back to home page
        </Button>
      </Center>
    </Container>
  );
}
