import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export const CarouselComponent = () => {
    const images = ["https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214122/DOORS/IMG_9032_xuotis.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214018/DOORS/IMG_5757_xc0jrh.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214477/WARDROBES/IMG_0509_wos5vd.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214531/WARDROBES/IMG_5017_mikfdr.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214291/KITCHEN/IMG_5380_ydm6pk.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213228/4%20MANUAL%20ORGANS/19d5e86b-d4dc-4107-b4af-73626cc55194_kplbuj.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213306/BEDS/IMG_0510_oyt8hu.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214399/STOREROOM%20SHELVES/IMG_9774_nwwcd3.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213796/DOOR%20LOCKS/IMG_8711_wtpwpa.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213398/BOOK%20SHELVES/IMG_0681_wx6oza.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213567/CONSOLE%20TABLE/IMG_0114_wecgix.jpg","https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213477/CEILING%20BEAMS/IMG_3891_qxthbc.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214337/PIGEON%20HOLES/IMG_5358_c1sc6u.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681213187/WINDOWS/IMG_5626_nki9ih.jpg", "https://res.cloudinary.com/dhzzfn7sr/image/upload/v1681214447/VANITY/IMG_4593_wkww2x.jpg"];
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