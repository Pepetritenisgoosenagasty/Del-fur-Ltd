import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

export const Client = () => {
  return (
    <Carousel
      withIndicators={false}
      withControls={false}
      height={200}
      slideSize="28%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide>
        <Image src="" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
    </Carousel>
  );
}