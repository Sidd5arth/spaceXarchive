import { Image, Stack, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import { imageGridItems } from "../../utils/BackgroundData";

const imageGridItemSize = { width: 200, height: 300 };

const Background = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "aliceblue",
    }}
  >
    <Grid
      gutter="lg"
      w={imageGridItemSize.width * 3 + 60}
      style={{
        transform: "rotate(8deg)",
      }}
    >
      {imageGridItems.map((gridItemsColumn, rowIndex) => (
        <Grid.Col span={4} key={rowIndex}>
          <Stack>
            {gridItemsColumn.map((gridItem, itemIndex) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: itemIndex * 0.2 }}
                key={itemIndex}
                style={{
                  background: "aliceblue",
                  borderRadius: "1em",
                  boxShadow: "10px 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={gridItem.src}
                  alt={gridItem.alt}
                  radius="xl"
                  style={{
                    width: "100%",
                    height: "auto",
                    scale: "0.8",
                  }}
                />
              </motion.div>
            ))}
          </Stack>
        </Grid.Col>
      ))}
    </Grid>
  </div>
);

export default Background;
