import { Button, Image, Select, Text, Textarea, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import QuoteForm from "@/Features/components/QuoteForm";

export const openModal = () =>
  modals.open({
    centered: true,
    title: (
      <h1 className="text-[20px] font-bold text-center px-4 pt-4">Request For A Quote</h1>
    ),
    size: "md",
    children: (
      <>
       <QuoteForm />
      </>
    ),
  
  });

export const HeaderComponent = () => {
    const router = useRouter()
   
  return (
    <div
      className="fixed top-0 w-full h-[100px] bg-white flex header"
      style={{ zIndex: 201 }}
    >
      <div className="w-full lg:w-[1170px] mx-auto my-auto px-8 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src="logo.jpg" alt="" withPlaceholder width="70%" />
          </div>
          <div className="hidden lg:flex items-center ">
            <ul className="flex space-x-8 ">
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
