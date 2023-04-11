import { Button, Image, Select, Text, Textarea, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";


export const HeaderComponent = () => {
    const router = useRouter()
   
  const openModal = () =>
    modals.open({
      centered: true,
      title: (
        <h1 className="text-[20px] font-bold text-center px-4 pt-4">Request For A Quote</h1>
      ),
      size: "md",
      children: (
        <>
          <Text size="sm" mb="md" px={14}>
            Would you like to request for a quote about a particular furniture?
            Just submit your details and we’ll be in touch shortly. You can also
            email us if you would prefer.
          </Text>
          <form>
            <div className="space-y-4 px-4">
              <Select
                label="Quote"
                placeholder="Select a quote"
                withAsterisk
                data={[
                  { value: "Renovation", label: "Renovation" },
                  { value: "New Project", label: "New Project" },
                  { value: "Existing Project", label: "Existing Project" },
                ]}
              />
              <TextInput
                label="Your email"
                placeholder="Your email"
                data-autofocus
                withAsterisk
              />
              <TextInput
                label="Job Type"
                placeholder="Job Type"
                data-autofocus
              />
              <Select
                label="Request Status"
                placeholder="How soon"
                withAsterisk
                data={[
                  { value: "Budgeting", label: "Budgeting" },
                  { value: "Working Progress", label: "Working Progress" },
                  { value: "Very Urgent", label: "Very Urgent" },
                ]}
              />
              <Textarea
                placeholder="Your location"
                label="Your Location"
                withAsterisk
              />
            </div>
             <div className="mt-10 mb-4 mx-4">
             <button
              className="w-full  px-[25px] py-[12px] text-[#fff] rounded-md  bg-[#2d3091] border border-[#2d3091] text-[14px] font-[600] hover:bg-[#2d3091]"
            >
             Submit
            </button>
             </div>
          </form>
        </>
      ),
    
    });
  return (
    <div
      className="fixed top-0 w-full h-[100px] bg-white flex header"
      style={{ zIndex: 201 }}
    >
      <div className="w-[1170px] mx-auto my-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src="logo.jpg" alt="" withPlaceholder width="80%" />
          </div>
          <div className="flex items-center ">
            <ul className="flex space-x-8">
              <li className={`text-[16px] font-[400] py-2 ${router.asPath === "/" ? "border-b-2 border-[#000]" : undefined}`}>
                <Link href="/">Home</Link>
              </li>
              {/* <li className="text-[16px] font-[300]">
                                <Link href="">Service</Link>
                            </li> */}
              <li className={`text-[16px] font-[400] py-2 ${router.asPath === "/gallery" ? "border-b-2 border-[#000]" : undefined}`}>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className={`text-[16px] font-[400] py-2 ${router.asPath === "/about" ? "border-b-2 border-[#000]" : undefined}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`text-[16px] font-[400] py-2 ${router.asPath === "/contact" ? "border-b-2 border-[#000]" : undefined}`}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <button
              onClick={openModal}
              className="ml-16 px-[25px] py-[12px] rounded-md text-[#2d3091] border border-[#2d3091] text-[14px] font-[600] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
