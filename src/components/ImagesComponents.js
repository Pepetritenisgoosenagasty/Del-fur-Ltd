import { Image, Pagination, SimpleGrid } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const ImagesComponents = ({data, galleryID}) => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 20;

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = data.slice(startIndex, endIndex);
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
        {currentItems?.map((image, index) => (
            <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 0.5}} key={index} className="image-container cursor-pointer" >
                <a
          href={image.path}
          data-pswp-width={800}
          data-pswp-height={800}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          
                  <Image width="100%" height={250} src={image.path} alt="With default placeholder" withPlaceholder  />
        </a>

            </motion.div>
        ))}
    </SimpleGrid>
  </div>
    <div className='pt-20'>
    <Pagination
   
     total={(Math.ceil(data.length / 20))}
     itemsPerPage={itemsPerPage}
     currentPage={currentPage}
     onChange={(page) => setCurrentPage(page)}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'blue', to: 'black' }),
          },
        },
      })}
    />
    </div>
  </>
  )
}

export default ImagesComponents