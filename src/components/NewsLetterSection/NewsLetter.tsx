import {
  Button,
  Container,
  Image,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import image from "../../assets/image.svg";
import classes from "./NewsLetter.module.scss";

const NewsLetter = () => {
  return (
    <Container size="xl" py="xl">
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Stay in the loop</Title>

          <Text className={classes.subtitle}>
            Subscribe to our weekly newsletter
          </Text>

          <Text color="dimmed" size="sm">
            Get the latest updates on product launches, features, and exclusive
            insights delivered straight to your inbox. No spam — just great
            content, every Sunday.
          </Text>

          <div className={classes.controls}>
            <TextInput
              placeholder="Your email"
              classNames={{ input: classes.input, root: classes.inputWrapper }}
              size="md"
            />
            <Button variant="filled" sx={{ borderRadius: "2rem" }} size="md">
              Subscribe
            </Button>
          </div>
        </div>

        <Image src={image} alt="Newsletter" className={classes.image} />
      </div>
    </Container>
  );
};

export default NewsLetter;
