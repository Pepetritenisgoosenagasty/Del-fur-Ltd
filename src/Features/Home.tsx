import { CarouselComponent } from "@/components/CarouselComponent";
import TeamCard from "@/components/TeamCard";
import { Image, List, Overlay, SimpleGrid, ThemeIcon } from "@mantine/core";
import {
  IconChairDirector,
  IconCircleCheck,
  IconFlag,
  IconHeadset,
  IconHourglassLow,
  IconQuote,
  IconThumbUp,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { Montserrat } from "next/font/google";
import React from "react";
import CountUp from "react-countup";
import { Client } from "./components/Clients";
import { ContactSection } from "./components/ContactSection";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <section className="w-full h-[90vh] bg-[#f5f5f5] bg-[url(../assets/images/banner-bg.png)] bg-left bg-no-repeat bg-center">
        <div className="w-[1170px] mx-auto flex items-center h-full">
          <div className="w-1/3">
            <h1 className="text-[32px] font-[500] text-[#1F2128] ">
            A Tradition of Joinery Excellence
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] my-[35px]">
            At our company, we continue this tradition of joinery excellence, using the same time-honored methods and attention to detail that have been perfected over centuries.
            </p>
            <button
              style={montserrat.style}
              className="px-[25px] py-[15px] mt-4 text-[#2d3091] border border-[#2d3091] text-[12px] font-[700] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150"
            >
              EXPLORE OUR WORKS
            </button>
          </div>
          <div className="w-2/3 ml-10 relative ">
            <div className="carousel-section">
              <div className="pl-16 ">
                <CarouselComponent />
              </div>
              <div className="px-16 py-6 bg-white w-[600px] min-h-[200px] -mt-[100px] ">
                <div className="mt-24">
                  <h5 className="text-[16px] font-[500] text-[#1F2128]">
                   Recent Works
                  </h5>
                  <p className="text-[14px] font-[400] text-[#1F2128]">
                  Here is an overview of the services we offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[300px] bg-[#fff] py-20">
      <div className="w-[800px] mx-auto">
            <h1 className="text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
            Welcome and thank you for visiting the Del-Fur Ltd website
            </h1>
            <div className="">
            <p className="text-[16px] font-[500] text-[#606060] text-left">
            I am Delali Amexo, Chief Executive Officer.
            </p>
            <p className="text-[16px] font-[500] text-[#606060] mb-4 text-left">
            Our Company is positioned :-
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
            To solve complex Joinery and Furniture related challenges in the construction industry.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
            This mission has been testified by our numerous clients since the establishment of our company.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
            Our premium quality service knows no bounds and we hope you become a beneficiary.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
            On behalf of Del-Fur Ltd, I invite you to explore our website and learn more about all we have to offer. I am sure you will see why we love what we do.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left mt-6 font-[600]">
            Sincerely, <br />
Delali Amexo. <br />
CEO
            </p>
            </div>
        </div>
      </section>
      <section className=" min-h-[400px] bg-[url(../assets/images/parallax.jpg)] parallax-section relative">
      <Overlay color="#000" opacity={0.7} />
      <div className="w-[1170px]  mx-auto py-12 relative" style={{ zIndex: 210 }}>
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
      <section className="min-h-[600px] w-full py-24">
        <div className="w-[1170px] mx-auto flex">
          <div className="w-1/2 pr-20">
            <h1 className="text-[28px] font-[400] text-[#1F2128] mb-[25px]">
             Who We Are
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] mb-[25px]">
            Del-fur ltd, a Ghanaian based company, formally operating as co-founder of PAP woodworks and Dela Furnishers commenced production in 1997 as an in-house carpentry workshop. We provide excellent furniture and joinery services to homes, institutions and industries with high grade finishing and safety as our core mandate.
            </p>

            <div>
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">MISSION</h5>
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
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">VISION</h5>
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
            <h1 className="text-[20px] font-[400] text-[#1F2128] mb-[20px]">
             Core Values
            </h1>
            <div>
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">INNOVATION</h5>
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
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">RELATIONSHIP</h5>
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
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">INTEGRITY</h5>
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
                <h5 className="text-[14px] font-[600] mb-[10px] text-[#606060]">CAN DO</h5>
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
          <div className="w-1/2">
            <Image
              src="stand.jpeg"
              alt=""
              withPlaceholder
              height={760}
            />
          </div>
        </div>
      </section>
      <section className="min-h-[400px] bg-[url(../assets/images/parallax2.jpg)] flex  parallax-section relative">
        <Overlay color="#000" opacity={0.7} />
      <div className="w-[1170px]  mx-auto py-16" style={{ zIndex: 200 }}>
      <div className="w-[800px] mx-auto">
            <h1 className="text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
            Our Achievements
            </h1>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
            Global Communities- YIEDIE.
            </p>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
            Advanced Craft certificate in carpentry and joinery awarded by City & Guilds of London institute.
            </p>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
            Participate in Management & development workshops organized by AMEX International Inc, Furniture & wood products Association of Ghana (FAWAG) and Government of Ghana Trade and Investment Reform Program (TRIP) between 1999 and 2001.
            </p>
          </div>
        <div className="flex items-center justify-around text-white mt-10 mb-6">
       
          <div >
            <h1 className="text-[35px] font-[600]">
              <CountUp start={0} end={750} duration={3} /> +
            </h1>
            <p>PROJECTS</p>
          </div>
          <div style={{ zIndex: 201 }}>
            <h1 className="text-[35px] font-[600]">100%</h1>
            <p>SATISFIED CLIENTS</p>
          </div>
          <div style={{ zIndex: 201 }}>
            <h1 className="text-[35px] font-[600]">25+</h1>
            <p>INSTITUTIONS</p>
          </div>
          <div style={{ zIndex: 201 }}>
            <h1 className="text-[35px] font-[600]">5+</h1>
            <p>AWARDS</p>
          </div>
        </div>
      </div>
      </section>
      <section className="min-h-[500px]">
        <div className="w-[1170px] mx-auto py-20">
          <div>
            <h1 className="text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
              Meet Our Experts
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] mb-[35px] text-center">
            At our company, we believe that the success of any business is only as strong as the team behind it. <br /> That&apos;s why we&apos;re proud to introduce you to the talented individuals who make up our team.
            </p>
          </div>
          <div>
            <SimpleGrid cols={3}>
              <div>
                <TeamCard img="/ceo.jpeg" name="Mr. Delali L. Amexo" position="C.E.O"/>
              </div>
              <div></div>
              <div>
                <TeamCard img="/MD.jpg" name="Mr. Derek Edem Amexo" position="Managing Director"/>
              </div>
              <div>
                <TeamCard img="/administrators.jpg" name="Administrators" position=""/>
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
      <section className="min-h-[480px] bg-white">
        <div className="w-[800px] mx-auto pt-12 pb-12 relative">
            <div className="absolute opacity-25 -left-24">
                <IconQuote size={100}/>
            </div>
          <div>
            <h1 className="text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
            Testimonials
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            Two and half years after installation by Del-Fur, almost every guest at our home asks the question; &#43;where did you buy them from?&#43; , followed by &#43;a carpenter built these here in Ghana?&#43; ... once we tell them &#43;a carpenter built them here&#43;.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            All items built by Del-Fur in our home - pretty much almost everything made of wood in our home; from doors, through study cabinets to closets and vanity sets and everything in between - still look new - after two and a half years.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            Del-fur&apos;s products are plainly durable and undoubtedly classy, at a percentage of average prices of luxurious furniture.
I recommend Del-Fur for anyone with eyes for quiet luxury.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left mt-6 font-[600]">
            Simon K. A. Ayivi <br/>
Founder & Chairman, Spero Foundation
            </p>
            <div className="absolute bottom-16 opacity-25 -right-20">
                <IconQuote size={100}/>
            </div>
          </div>
          
        </div>
      </section>
      <section className="min-h-[200px] bg-[#46AAE4] pt-12 text-white">
      <div className="w-[800px] mx-auto">
            <h1 className="text-[32px] font-[500] text-white mb-[20px] text-center">
            Our Partners
            </h1>
            <div className="mt-16">
                <Client />
            </div>
        </div>
      </section>
      <section className="min-h-[700px] ">
        <div className="w-[800px] mx-auto py-20">
          <div>
            <h1 className="text-[32px] font-[500] text-[#1F2128]  text-center">
              Health and Safety
            </h1>
            <p className="text-[16px] font-[500] text-[#606060]  py-2 text-center">
              Environmental & Production Control System
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            We vigorously implement our policy of maintaining safety measures and practices considerably in excess of the requirements of the local authorities.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            Modern woodworking machinery is potentially dangerous when not properly used and maintained in proper working condition. The workmen who operate our high-speed machinery are all thoroughly conversant with their machines and are also chosen for their responsible attitude to its use. All machines are subject to a continue process of inspection and preventive maintenance, and are promptly repaired as and when necessary.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            We are also cognizant of the quality of the woodworking environment and accordingly we provide safety clothing, nose masks, boots and googles and ensure these are always worn by our staff. The working areas are maintained in constant state of cleanliness by labourers whose sole function is to sweep and clean. We enforce a strict no smoking policy and frown on alcohol and drugs in both the workshop and administration suit. We have fully charged fire extinguishers in appropriate positions at the workshop.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            Certain materials are highly flammable such as paints, lacquer solvents and some adhesives. Our stocks of these are kept to the minimum necessary levels and they are separately stored in well protected areas. High-pressure, post-formable plastic laminates, such as ‘Formica’ deteriorate in prolonged exposure to the local climate, so these too are kept in cool areas. We also maintain substantial stocks of hardwood, veneers and these can be adversely affected by over-dry storage conditions and prolonged exposure exposure to light, so, unlike laminate we keep them in darkened storage.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
            It also bears mentioning that we pay our staff and workmen promptly and in each month and in genuine cases we are sympathetic to their difficulties and domestic concerns. Many of our workmen and management staff have worked for us quite happily for many years and would not wish to leave us now. Therefore we have a generally contented, satisfied work force - which makes for better attitudes, better motivation and a better standard of workmanship.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    
      <section className="min-h-[200px] bg-white">
        <div className="w-[1170px] mx-auto pt-20">
        <h1 className="text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
            Contact Us
            </h1>
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default Home;
