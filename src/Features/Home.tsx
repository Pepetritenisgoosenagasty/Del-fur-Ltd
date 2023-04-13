import { CarouselComponent } from "@/components/CarouselComponent";
import TeamCard from "@/components/TeamCard";
import { Overlay, SimpleGrid } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import { Montserrat } from "next/font/google";
import React from "react";
import CountUp from "react-countup";
import { Client } from "./components/Clients";
import { ContactSection } from "./components/ContactSection";
import MissionSection from "./components/MissionSection";
import TeamSection from "./components/TeamSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter()
  return (
    <>
      <section className="w-full py-20 lg:py-0 lg:h-[700px] bg-[#f5f5f5] bg-[url(../assets/images/banner-bg.png)] bg-left bg-no-repeat bg-center">
        <div className="lg:w-[1170px] lg:mx-auto flex items-center h-full">
          <div className="w-full px-10 lg:px-0 lg:w-1/3 ">
            <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128] ">
              A Tradition of Joinery Excellence
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] my-[35px]">
              At our company, we continue this tradition of joinery excellence,
              using the same time-honored methods and attention to detail that
              have been perfected over centuries.
            </p>
            <button
              style={montserrat.style}
              className="px-[25px] py-[15px] rounded-md mt-4 text-[#2d3091] border border-[#2d3091] text-[12px] font-[700] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150"
              onClick={() => router.push("/gallery")}
            >
              EXPLORE OUR WORKS
            </button>
          </div>
          <div className="w-2/3 hidden lg:block ml-10 relative ">
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
      <section className="px-10 lg:px-0  bg-[#fff] py-16">
        <div className="lg:w-[800px] mx-auto">
          <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
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
              To solve complex Joinery and Furniture related challenges in the
              construction industry.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
              This mission has been testified by our numerous clients since the
              establishment of our company.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
              Our premium quality service knows no bounds and we hope you become
              a beneficiary.
            </p>
            <p className="text-[16px] font-[400] text-[#606060]  text-left">
              On behalf of Del-Fur Ltd, I invite you to explore our website and
              learn more about all we have to offer. I am sure you will see why
              we love what we do.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left mt-6 font-[600]">
              Sincerely, <br />
              Delali Amexo. <br />
              CEO
            </p>
          </div>
        </div>
      </section>
      <MissionSection />
      <WhoWeAreSection img="stand.jpeg" />

      <section className="min-h-[400px] bg-[url(../assets/images/parallax2.jpg)] flex  parallax-section relative">
        <Overlay color="#000" opacity={0.7} />
        <div className="lg:w-[1170px]  mx-auto py-16" style={{ zIndex: 200 }}>
          <div className="lg:w-[800px] px-10 lg:px-0 mx-auto">
            <h1 className="text-[25px] md:text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
              Our Achievements
            </h1>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
              Global Communities- YIEDIE.
            </p>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
              Advanced Craft certificate in carpentry and joinery awarded by
              City & Guilds of London institute.
            </p>
            <p className="text-[16px] font-[500] text-[#fff] mb-[10px] text-center">
              Participate in Management & development workshops organized by
              AMEX International Inc, Furniture & wood products Association of
              Ghana (FAWAG) and Government of Ghana Trade and Investment Reform
              Program (TRIP) between 1999 and 2001.
            </p>
          </div>
          <div className="flex flex-col md:flex-row text-center space-y-6 md:space-y-0 items-center justify-around text-white mt-10 mb-6">
            <div>
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
      <TeamSection />
      <section className="bg-white">
        <div className="lg:w-[800px] mx-auto pt-10 pb-16 px-10 lg:px-0 relative">
          <div className="absolute opacity-25 -left-24">
            <IconQuote size={100} />
          </div>
          <div>
            <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
              Testimonials
            </h1>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              Two and half years after installation by Del-Fur, almost every
              guest at our home asks the question; &#43;where did you buy them
              from?&#43; , followed by &#43;a carpenter built these here in
              Ghana?&#43; ... once we tell them &#43;a carpenter built them
              here&#43;.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              All items built by Del-Fur in our home - pretty much almost
              everything made of wood in our home; from doors, through study
              cabinets to closets and vanity sets and everything in between -
              still look new - after two and a half years.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              Del-fur&apos;s products are plainly durable and undoubtedly
              classy, at a percentage of average prices of luxurious furniture.
              I recommend Del-Fur for anyone with eyes for quiet luxury.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left mt-6 font-[600]">
              Simon K. A. Ayivi <br />
              Founder & Chairman, Spero Foundation
            </p>
            <div className="hidden lg:absolute bottom-16 opacity-25 -right-20">
              <IconQuote size={100} />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[200px] bg-[#46AAE4] pt-12 text-white">
        <div className="lg:w-[800px] mx-auto">
          <h1 className="text-[25px] md:text-[32px] font-[500] text-white mb-[20px] text-center">
            Our Partners
          </h1>
          <div className="mt-16">
            <Client />
          </div>
        </div>
      </section>
      <section className="min-h-[700px] ">
        <div className="lg:w-[800px] mx-auto pt-14 pb-20 px-10 lg:px-0">
          <div>
            <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128]  text-center">
              Health and Safety
            </h1>
            <p className="text-[16px] font-[500] text-[#606060]  py-2 text-center">
              Environmental & Production Control System
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              We vigorously implement our policy of maintaining safety measures
              and practices considerably in excess of the requirements of the
              local authorities.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              Modern woodworking machinery is potentially dangerous when not
              properly used and maintained in proper working condition. The
              workmen who operate our high-speed machinery are all thoroughly
              conversant with their machines and are also chosen for their
              responsible attitude to its use. All machines are subject to a
              continue process of inspection and preventive maintenance, and are
              promptly repaired as and when necessary.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              We are also cognizant of the quality of the woodworking
              environment and accordingly we provide safety clothing, nose
              masks, boots and googles and ensure these are always worn by our
              staff. The working areas are maintained in constant state of
              cleanliness by labourers whose sole function is to sweep and
              clean. We enforce a strict no smoking policy and frown on alcohol
              and drugs in both the workshop and administration suit. We have
              fully charged fire extinguishers in appropriate positions at the
              workshop.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              Certain materials are highly flammable such as paints, lacquer
              solvents and some adhesives. Our stocks of these are kept to the
              minimum necessary levels and they are separately stored in well
              protected areas. High-pressure, post-formable plastic laminates,
              such as ‘Formica’ deteriorate in prolonged exposure to the local
              climate, so these too are kept in cool areas. We also maintain
              substantial stocks of hardwood, veneers and these can be adversely
              affected by over-dry storage conditions and prolonged exposure
              exposure to light, so, unlike laminate we keep them in darkened
              storage.
            </p>
            <p className="text-[16px] font-[400] text-[#606060] text-left">
              It also bears mentioning that we pay our staff and workmen
              promptly and in each month and in genuine cases we are sympathetic
              to their difficulties and domestic concerns. Many of our workmen
              and management staff have worked for us quite happily for many
              years and would not wish to leave us now. Therefore we have a
              generally contented, satisfied work force - which makes for better
              attitudes, better motivation and a better standard of workmanship.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className="min-h-[200px] bg-white">
        <div className="lg:w-[1170px] mx-auto py-14">
          <h1 className="text-[25px] md:text-[32px] font-[500] text-[#1F2128] mb-[20px] text-center">
            Contact Us
          </h1>
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default Home;
