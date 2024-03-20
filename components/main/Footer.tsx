import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaPhone />
                        <span className="text-[15px] ml-[6px]">( +54 9 3865248324 ) Argentina</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaMailBulk />
                        <span className="text-[15px] ml-[6px]">jeremiasrg01@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaMailBulk />
                        <span className="text-[15px] ml-[6px]">jeremiasrg02@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Jeremias Rodriguez Guzman. 2024
            </div>
        </div>
    </div>
  )
}

export default Footer