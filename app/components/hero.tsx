"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowTrendUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

  return (
    <div className="w-full ">
        <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        loop
        >
        <SwiperSlide>
            <div className="flex flex-col justify-center md:relative md:block h-screen">
                <div className="flex flex-col justify-center items-center gap-5  max-w-lg my-5 mx-15 md:mx-27 md:top-40 md:left-1/2 md:absolute md:items-start md:z-30">
                    <h1 className="text-3xl font-bold font-saira-condensed text-white text-center md:text-neutral-950 md:text-left md:text-6xl">
                        DÜNYA RAP
                        TRENDLERİNİ
                        KONUŞUYORUZ.
                    </h1>
                    <p className="text-sm font-saira text-white md:text-base md:text-neutral-950 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    </p>
                    <div className="w-fit px-6 py-3 bg-yellow-300  [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] shadow-lg cursor-pointer group hover:bg-neutral-950 transition-colors duration-200">
                        <p className=" text-base text-neutral-950 font-saira font-bold group-hover:text-white ">Devamını Oku</p>
                    </div>
                    <div className="flex items-center gap-2 mt-10">
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-300 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                    </div>
                </div>
                <img src="./rapper-1.png" alt="aferican-american rapper" className="md:absolute md:h-screen md:w-full bg-cover bg-center md:z-20"/>   
                <img src="./fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full h-45 bottom-0 md:z-30 md:h-auto"/>
            </div>
        </SwiperSlide>
        

        <SwiperSlide>
            <div className="flex flex-col justify-center md:relative md:block h-screen">
                <div className="flex flex-col justify-center items-center gap-5  max-w-lg my-5 mx-15 md:mx-27 md:top-40 md:left-1/2 md:absolute md:items-start md:z-30">
                    <h1 className="text-3xl font-bold font-saira-condensed text-white text-center md:text-left md:text-6xl">
                        TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
                    </h1>
                    <p className="text-sm font-saira text-white md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    </p> 
                    <div className="w-fit px-6 py-3 bg-yellow-300  [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] shadow-lg cursor-pointer group hover:bg-neutral-950 transition-colors duration-200">
                        <p className="text-base text-neutral-950 font-saira font-bold group-hover:text-white">Devamını Oku</p>
                    </div>
                    <div className="flex items-center gap-2 mt-10">
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-4 h-4 rounded-full bg-yellow-300 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                        <div className="w-2 h-2 rounded-full bg-neutral-800 cursor-pointer"></div>
                    </div>
                </div>
                    <img src="./rapper-2.png" alt="aferican-american rapper turn with his back to the screen" className="md:absolute md:h-screen bg-cover md:z-20"/>
                    <img src="./fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full h-25 bottom-0 md:z-30 md:h-auto"/>
                </div>
        </SwiperSlide>
        </Swiper>
        <div className="relative w-full bg-[url('/fans-background-2.png')] bg-cover bg-bottom bg-no-repeat md:bg-contain">
            <div className="flex flex-col w-full justify-center items-center gap-5 mt-20 md:translate-y-70 md:mt-0">
                <div className="flex items-center divide-x divide-neutral-700 -rotate-[4deg]" >
                    <img src="/twitch.png" alt="twitch logo" className="h-30 md:h-auto"/>
                    <div className="px-5">
                        <p className="font-saira-condensed text-white text-5xl font-light md:text-6xl">HER HAFTA</p>
                        <p className="font-saira-condensed text-yellow-300 text-5xl font-bold md:text-6xl">CANLIDAYIZ!</p>
                        <p className="font-saira text-white text-xs font-bold md:text-base">Bizi Takip Edin!</p>
                    </div>
                </div>
                <div className="flex p-3 border border-neutral-700 rounded-2xl gap-3 -rotate-[4deg] " >
                    <button className="bg-purple-600 rounded-md text-white font-[Helvetica] text-sm font-bold py-2 px-3 cursor-pointer"  type="button">
                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "15px", marginRight: "10px"}} color="white" />
                        Takip Et
                    </button>
                    <button className="bg-neutral-800 rounded-md text-white font-[Helvetica] text-sm font-bold py-2 px-3 cursor-pointer" type="button">
                        <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px", marginRight: "10px"}} color="white" />
                        Abone ol
                        <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "15px", marginLeft: "10px"}} color="white"/>
                    </button>
                </div>
            </div>
            
            <div>
                <div className="relative">
                    <div className="flex justify-around items-end md:gap-30">
                        <img src="/rapper-3.png" alt="male rapper" className="h-70 -translate-y-10 md:h-120"/>
                        <img src="/rapper-4.png" alt="female rapper" className="h-90 -translate-y-2 md:h-150"/>
                        <img src="/fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full h-30 scale-x-[-1]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}