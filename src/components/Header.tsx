import { Image } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const HeaderComponent = () => {
    return (
        <div className="fixed top-0 w-full h-[100px] bg-white flex header" style={{zIndex: 1000}}>
            <div className="w-[1170px] mx-auto my-auto">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Image src="logo.jpg" alt="" withPlaceholder width="80%"/>
                    </div>
                    <div className="flex items-center ">
                        <ul className="flex space-x-8">
                            <li className="text-[16px] font-[300]">
                                <Link href="">Home</Link>
                            </li>
                            {/* <li className="text-[16px] font-[300]">
                                <Link href="">Service</Link>
                            </li> */}
                            <li className="text-[16px] font-[300]">
                                <Link href="">Gallery</Link>
                            </li>
                            <li className="text-[16px] font-[300]">
                                <Link href="">About</Link>
                            </li>
                            <li className='text-[16px] font-[400]'>
                        <Link href="">Contact</Link>
                    </li>
                        </ul>
                        <button className="ml-16 px-[25px] py-[8px] text-[#2d3091] border border-[#2d3091] text-[14px] font-[600] hover:bg-[#2d3091] hover:text-white hover:transition-all ease-in-out delay-150">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
