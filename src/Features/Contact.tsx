import { Overlay, SimpleGrid } from "@mantine/core";
import {
  IconAt,
  IconChevronRight,
  IconMap2,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className=" min-h-[400px] bg-[url(../assets/images/banner1.jpg)] bg-center bg-fixed bg-no-repeat bg-cover relative flex">
        <Overlay color="#000" opacity={0.7} />
        <div className="m-auto text-[#fff]" style={{ zIndex: 201 }}>
          <h1 className="text-[32px] font-[500] text-[#fff] mb-[20px] text-center">
            CONTACT
          </h1>
          <div className="border border-[#fff] px-4 py-2 flex items-center space-x-4 mt-8">
            <Link href="/">Home</Link>
            <IconChevronRight size={16} />
            <p>Contact</p>
          </div>
        </div>
      </section>
      <section className="py-28">
        <div className="w-[1170px] mx-auto">
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
              <IconMap2 size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">Address</h5>
              <p className="text-[14px] font-[400] text-[#606060]">
                P.O Box CS 8040 <br /> Tema, Ghana
              </p>
            </div>
            <div className="w-full bg-white py-12 px-6 flex items-center justify-center flex-col text-center space-y-4 min-h-[300px] custom-card">
              <IconPhoneCall size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">Phone</h5>
              <p className="text-[14px] font-[400] text-[#606060]">
                +233 (020) 815-2216 <br />
                +233 (020) 667-6184
              </p>
            </div>
            <div className="w-full bg-white py-12 px-6 flex items-center justify-center flex-col text-center space-y-4 min-h-[300px] custom-card">
              <IconAt size={50} />
              <h5 className="text-[16px] font-[500] text-[#1F2128]">Email</h5>
              <p className="text-[14px] font-[400] text-[#606060]">
                delafurnishers7@gmail.com <br />
                info@delfurltd.com
              </p>
            </div>
          </SimpleGrid>
        </div>
      </section>
      <section className="min-h-[400px] pb-20">
        <div className="w-[800px] m-auto flex">
         {/* <div className="w-1/3">
           <p className="mb-[35px] text-[14px] font-[400] text-[#606060] ">Thank you for visiting our website! We are always happy to hear from our visitors and customers. If you have any questions, comments, or feedback, please don&apos;t hesitate to get in touch with us. Our friendly customer support team is available to help you with any queries you may have. You can reach us by phone, email.</p>
         </div> */}
         <div className="w-full">
           <ContactForm /> 
         </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
