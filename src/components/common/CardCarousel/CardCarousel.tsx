import { Carousel } from "@mantine/carousel";
import classes from "./CardCarousel.module.scss";

interface CarouselComponentProps {
  imageData: string[];
}

const CarouselComponent = (props: CarouselComponentProps) => {
  const slides = props.imageData.map((item, index) => (
    <Carousel.Slide key={index}>
      <img src={item} className={classes.image} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      slideGap="md"
      align="center"
      slidesToScroll={1}
      withIndicators
      loop
    >
      {slides}
    </Carousel>
  );
};

export default CarouselComponent;
