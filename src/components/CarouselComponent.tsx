import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export const CarouselComponent = () => {
    const images = ["https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2412&q=80", "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"];
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} alt="" width="100%" height={250} />
        </Carousel.Slide>
      ));
  return (
    <Carousel  plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset} slideSize="42%" height={250}  loop   align="start" slideGap="xl"  controlSize={40} >
      {/* ...slides */}
      {slides}
    </Carousel>
  );
}