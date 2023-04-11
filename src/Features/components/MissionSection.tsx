import { Overlay, SimpleGrid } from '@mantine/core'
import { IconHeadset, IconThumbUp, IconTruckDelivery } from '@tabler/icons-react'
import React from 'react'

const MissionSection = () => {
  return (
    <>
         <section className=" min-h-[400px] bg-[url(../assets/images/parallax.jpg)] parallax-section relative">
      <Overlay color="#000" opacity={0.7} />
      <div className="w-[1170px]  mx-auto py-16 relative" style={{ zIndex: 200 }}>
      <div className="w-[800px] mx-auto relative">
            <h1 className="text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
            Our Mission
            </h1>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
            We provide excellent furniture and joinery services to homes, institutions and industries with high grade finishing and safety as our core mandate.
            </p>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
            In all our projects we seek to achieve the following objectives.
            </p>
            
          </div>
          </div>
      </section>
      <section className="min-h-[370px]">
        <div className="w-[1170px] mx-auto -mt-32 ">
          <SimpleGrid
            cols={3}
            spacing="xl"
            breakpoints={[
              { maxWidth: "62rem", cols: 3, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}
          >
            <div className="w-full bg-white py-12 px-6 flex items-center justify-center flex-col text-center space-y-4 min-h-[300px] custom-card">
              <IconHeadset size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">
              100% Customer Satisfaction.
              </h5>
              <p className="text-[14px] font-[400] text-[#606060]">
              we are committed to providing exceptional customer service and ensuring 100% customer satisfaction. We strive to exceed your expectations at every turn, and are dedicated to making your experience with us as positive and seamless as possible.
              </p>
            </div>
            <div className="w-full bg-white py-12 px-6 flex items-center justify-center flex-col text-center space-y-4 min-h-[300px] custom-card">
              <IconThumbUp size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">
              Outstanding Quality
              </h5>
              <p className="text-[14px] font-[400] text-[#606060]">
              Our unwavering commitment to outstanding quality is evident in every project we undertake. We use only the finest materials and employ skilled craftsmen to ensure that our work is of the highest caliber, delivering exceptional results that will stand the test of time.
              </p>
            </div>
            <div className="w-full bg-white py-12 px-6 flex items-center justify-center flex-col text-center space-y-4 min-h-[300px] custom-card">
              <IconTruckDelivery size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">
                Fast, Flexible and Responsive Service
              </h5>
              <p className="text-[14px] font-[400] text-[#606060]">
              We understand the importance of fast, flexible, and responsive service in today&apos;s fast-paced business environment. That&apos;s why we prioritize timely communication, flexible solutions, and efficient project management to ensure that we meet and exceed our clients&apos; expectations.
              </p>
            </div>
          </SimpleGrid>
        </div>
      </section>
    </>
  )
}

export default MissionSection