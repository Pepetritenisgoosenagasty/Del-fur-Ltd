import FilterButtons from '@/components/FilterButtons'
import ImagesComponents from '@/components/ImagesComponents'
import { Overlay } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import React, { createContext, useState } from 'react'
import imageData from "../data/imageData.json"



export const ImagesContext = createContext

const Gallery = () => {
    const [imageGallery, setimageGallery] = useState(imageData)
    const [filteredCat, setfilteredCat] = useState(imageData)
    

  return (
    <>
    
      <section className=" min-h-[400px] bg-[url(../assets/images/tables.jpeg)] bg-top bg-fixed bg-no-repeat bg-cover relative flex">
        <Overlay color="#000" opacity={0.7} />
        <div className="m-auto text-[#fff]" style={{ zIndex: 201 }}>
          <h1 className="text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
            GALLERY
          </h1>
          <div className="border border-[#fff] px-4 py-2 flex items-center space-x-4 mt-8">
            <Link href="/">Home</Link>
            <IconChevronRight size={16} />
            <p>Gallery</p>
          </div>
        </div>
      </section>
      <section className='min-h-[500px]'>
       <div className='w-[1170px] mx-auto py-20'>
          <p className='text-center text-[20px] font-[500] mb-4'>Take a look at some of our customized products built for companies and institutions</p>
         <FilterButtons data={imageGallery} setfilteredCat={setfilteredCat}/>
         <div className='py-12'>
        

            <AnimatePresence>
            <ImagesComponents data={filteredCat} galleryID="my-test-gallery"/>

            </AnimatePresence>
        
         </div>
       </div>
      </section>

   
    </>
  )
}

export default Gallery