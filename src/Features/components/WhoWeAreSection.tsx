import { Image, List, ThemeIcon } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'
import { Montserrat } from 'next/font/google';
import React from 'react'

const montserrat = Montserrat({ subsets: ["latin"] });

const WhoWeAreSection = ({img}: any) => {

  return (
    <>
       <section className="lg:min-h-[600px] w-full py-20">
        <div className="lg:w-[1170px] mx-auto flex">
          <div className="lg:w-1/2 lg:pr-20 px-10 lg:px-0">
            <h1 className="text-[25px] md:text-[32px] mb-4 md:md-0 font-[600] text-[#1F2128]">
             Who We Are
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] mb-[25px]">
            Del-fur ltd, a Ghanaian based company, formally operating as co-founder of PAP woodworks and Dela Furnishers commenced production in 1997 as an in-house carpentry workshop. We provide excellent furniture and joinery services to homes, institutions and industries with high grade finishing and safety as our core mandate.
            </p>

            <div>
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">MISSION</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}> To be the best joinery company in Ghana, producing wooden related products from the finest of woods.</List.Item>
              </List>
            </div>
            <div className="my-4">
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">VISION</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>To become a household name in joinery and furniture services across Africa and beyond.</List.Item>
              </List>
            </div>
            <div className="mt-6">
            <h1 className="text-[25px] md:text-[32px] font-[600] text-[#1F2128] mb-[10px]">
             Core Values
            </h1>
            <div>
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">INNOVATION</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>Being creative. Generate new ideas, focusing on originality.</List.Item>
              </List>
            </div>
            <div className="my-4">
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">RELATIONSHIP</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>Tolerate one another, sharing ideas and working as a team, effective communication.</List.Item>
              </List>
            </div>
            <div>
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">INTEGRITY</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>Honesty to clients, reliable, trustworthy.</List.Item>
              </List>
            </div>
            <div className="my-4">
                <h5 className="text-[14px] font-[700] mb-[10px] text-[#606060]">CAN DO</h5>
              <List
                style={montserrat.style}
                
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="#2d3091" size={24} radius="xl">
                    <IconCircleCheck size="1rem" />
                  </ThemeIcon>
                }
              >
                <List.Item sx={{fontWeight: 400, lineHeight:1.5}}>Positivity, willingness to work, igniting confidence in our workers.</List.Item>
              </List>
            </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/2">
            <Image
              src={img}
              alt=""
              withPlaceholder
              height={740}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAreSection