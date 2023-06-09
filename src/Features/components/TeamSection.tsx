import TeamCard from '@/components/TeamCard'
import { SimpleGrid } from '@mantine/core'
import React from 'react'

const TeamSection = () => {
  return (
    <>
       <section className="min-h-[500px]">
        <div className="lg:w-[1170px] px-10 lg:px-0 mx-auto pt-12 pb-20">
          <div>
            <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
              Meet Our Experts
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] mb-[35px] text-center hidden lg:block">
            At our company, we believe that the success of any business is only as strong as the team behind it. <br /> That&apos;s why we&apos;re proud to introduce you to the talented individuals who make up our team.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] mb-[35px] text-center block lg:hidden">
            At our company, we believe that the success of any business is only as strong as the team behind it. That&apos;s why we&apos;re proud to introduce you to the talented individuals who make up our team.
            </p>
          </div>
          <div>
            <SimpleGrid  cols={3}
            spacing="xl"
            breakpoints={[
              { maxWidth: "62rem", cols: 2, spacing: "md" },
              { maxWidth: "48rem", cols: 2, spacing: "sm" },
              { maxWidth: "36rem", cols: 1, spacing: "sm" },
            ]}>
              <div>
                <TeamCard img="/ceo.jpeg" name="Mr. Delali L. Amexo" position="C.E.O"/>
              </div>
              <div className='hidden lg:block'></div>
              <div>
                <TeamCard img="/MD.jpg" name="Mr. Derek Edem Amexo" position="Managing Director"/>
              </div>
              <div>
                <TeamCard img="/admins.jpg" name="Administrators" position=""/>
              </div>
              <div>
                <TeamCard img="/Supervisor.jpg" name="Supervisor" position=""/>
              </div>
              <div>
                <TeamCard img="/ShopForemen.jpg" name="WorkShop Foremen" position=""/>
              </div>
              <div>
                <TeamCard img="/site.jpg" name="Site Installation Team" position=""/>
              </div>
              <div>
                <TeamCard img="/Assemble_team.jpeg" name="Assembling & Joinery Team" position=""/>
              </div>
              <div>
                <TeamCard img="/spraying.jpeg" name="Spraying Team" position=""/>
              </div>
            </SimpleGrid>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection