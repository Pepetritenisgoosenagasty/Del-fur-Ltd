import { Image, SimpleGrid } from '@mantine/core'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const ImagesComponents = ({data, galleryID}: any) => {
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
  <div className='pswp-gallery' id={galleryID}>

    <SimpleGrid cols={4} spacing="xl" >
        {data?.map((image: any, index: any) => (
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