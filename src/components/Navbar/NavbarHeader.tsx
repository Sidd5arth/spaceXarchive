import useAuthStore from "../../store/useAuthStore";
import classes from "./NavbarHeader.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/Logo";
import {
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";

const NavbarHeader = () => {
  const navigate = useNavigate();
  const { params } = useParams();
  const theme = useMantineTheme();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { logout } = useAuthStore((state) => ({ logout: state.logout }));
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.colors[theme.primaryColor][6],
        color: theme.white,
      }}
    >
      <header className={classes.header}>
        <Container w="100%" size="xl">
          <Flex justify="space-between" align="center" h="100%" w="100%">
            <Logo />
            {isAuthenticated ? (
              <Group className={classes.desktopOnly}>
                <Button onClick={logout} variant="filled" color="red">
                  Logout
                </Button>
              </Group>
            ) : (
              <Group className={classes.desktopOnly}>
                <Button variant="default" onClick={() => navigate("/login")}>
                  Log in
                </Button>
                <Button onClick={() => navigate("/login")}>Sign up</Button>
              </Group>
            )}
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.mobileOnly}
              color="white"
            />
          </Flex>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />

          {isAuthenticated ? (
            <Group ml="0.5em">
              <Button onClick={logout} variant="filled" color="red">
                Logout
              </Button>
            </Group>
          ) : (
            <Flex justify="center" gap="md" pb="xl" px="md">
              <Button variant="default" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button onClick={() => navigate("/login")}>Sign up</Button>
            </Flex>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default NavbarHeader;
