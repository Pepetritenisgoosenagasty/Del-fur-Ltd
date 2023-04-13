import { Image, SimpleGrid } from '@mantine/core'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const ImagesComponents = ({data, galleryID}) => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
          gallery: '#' + galleryID,
          children: 'a',
          pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    
        return () => {
          lightbox.destroy();
          lightbox = null;
        };
      }, []);
  return (<>
  <div className='pswp-gallery px-10 lg:px-0' id={galleryID}>

    <SimpleGrid  cols={4}
            spacing="xl"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}>
        {data?.map((image, index) => (
            <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 0.5}} key={image.id} className="image-container cursor-pointer" >
                <a
          href={image.path}
          data-pswp-width={800}
          data-pswp-height={800}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >

                  <Image width="100%" height={250} src={image.path} alt="With default placeholder" withPlaceholder />
        </a>

            </motion.div>
        ))}
    </SimpleGrid>
  </div>
    
  </>
  )
}

export default ImagesComponents