import { Button, Center } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <Button
      radius="xl"
      size="lg"
      p="xl"
      variant="default"
      sx={{
        width: 64,
        height: 64,
        position: "fixed",
        bottom: "2%",
        transform: "translateX(-50%)",
        left: "50%",
        zIndex: 100,
        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
        opacity: 0.8,
        transition: "opacity 0.2s ease",
        "&:hover": {
          opacity: 1,
          transform: "translateX(-50%) translatey(-1%)",
        },
      }}
      onClick={() => navigate("/")}
    >
      <Center style={{ width: "100%", height: "100%" }}>
        <IconHome size={28} />
      </Center>
    </Button>
  );
}

export default HomeButton;
