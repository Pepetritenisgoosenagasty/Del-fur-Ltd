import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export const Client = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
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
        { maxWidth: 'sm', slideSize: '40%', slideGap: 0 },
      ]}

      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <Image alt="" src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215755/OUR%20PARTNERS/Ashesi_University_Logo_9cm_kktrvq.jpg" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image alt="" src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215755/OUR%20PARTNERS/LCS-EXT-ST-COLOR-SM_mraoco.png" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image alt="" src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215755/OUR%20PARTNERS/KLM_logo.svg_l5hp3k.png" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215755/OUR%20PARTNERS/Databank-Logo-v2__WatermarkWyJjZW50ZXIiXQ_ScaleWidthWzYwMF0_c8s69n.jpg" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image alt="" src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/logo-pop_rkztf4.png" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image alt="" src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/114201650620_diamondcement161_ntfeky.jpg" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/FDA-LOGO-750x430_jdiwoy.jpg" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/9SZGT2O6_400x400_uanzis.jpg" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/cropped-cropped-renovaite-logo-blk_jjjloi.png" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src="https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681215754/OUR%20PARTNERS/Innova-DDB_nkcexq.jpg" alt="" withPlaceholder width={100} height={100}/>
      </Carousel.Slide>
    </Carousel>
  );
}