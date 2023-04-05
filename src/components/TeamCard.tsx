import { Image } from "@mantine/core";
import React from "react";

const TeamCard = ({img, name, position}: any) => {
  return (
    <>
      <div className="relative ml-12">
        <div className="absolute -left-[45px] top-[13px] z-10">
          <Image
            src={img}
            alt=""
            height={140}
            width={100}
            withPlaceholder
            sx={{objectFit: "contain"}}
          />
        </div>
        <div className="bg-white py-8 h-[170px] flex">
          <div className="m-auto flex items-center justify-center flex-col border-r-4 w-full h-full ml-10">
            <h1 className="text-[16px] font-[700] text-[#1F2128] text-center">
             {name}
            </h1>
            <p className="text-[14px] font-[500] text-[#606060] text-center">
             {position}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
