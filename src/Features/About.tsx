import { Overlay } from "@mantine/core";
import { IconChevronDownRight, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import MissionSection from "./components/MissionSection";
import TeamSection from "./components/TeamSection";
import WhoWeAreSection from "./components/WhoWeAreSection";

const About = () => {
  return (
    <>
      <section className=" min-h-[400px] bg-[url(../assets/images/about.jpg)] bg-top bg-fixed bg-no-repeat bg-cover relative flex">
        <Overlay color="#000" opacity={0.7} />
        <div className="m-auto text-[#fff]" style={{ zIndex: 201 }}>
          <h1 className="text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
            ABOUT US
          </h1>
          <div className="border border-[#fff] px-4 py-2 flex items-center space-x-4 mt-8">
            <Link href="/">Home</Link>
            <IconChevronRight size={16} />
            <p>About Us</p>
          </div>
        </div>
      </section>
      <WhoWeAreSection img="banner2.jpg" />
      <MissionSection />
      <TeamSection />
    </>
  );
};

export default About;
