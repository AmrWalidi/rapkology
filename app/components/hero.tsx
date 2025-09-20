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
            <div className="relative h-screen w-full bg-[url('/rapper-1.png')] bg-cover bg-center">
                <div className="absolute flex flex-col gap-5 mx-27 top-1/4 left-1/2 max-w-lg">
                    <h1 className="text-6xl font-bold font-saira-condensed text-neutral-950">
                        DÜNYA RAP
                        TRENDLERİNİ
                        KONUŞUYORUZ.
                    </h1>
                    <p className="text-base text-neutral-950 font-saira">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    </p>
                    <div className="w-fit px-6 py-3 bg-yellow-300  [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] shadow-lg cursor-pointer">
                        <p className=" text-base text-neutral-950 font-saira font-bold">Devamını Oku</p>
                        
                    </div>
                </div>
                <img src="/fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full bottom-0"/>
            </div>
        </SwiperSlide>
        

        <SwiperSlide>
            <div className="relative h-screen w-full bg-[url('/rapper-2.png')] bg-no-repeat">
                <div className="absolute flex flex-col gap-5 mx-27 top-1/4 left-1/2 max-w-lg">
                    <h1 className="text-6xl font-bold font-saira-condensed text-white">
                        TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
                    </h1>
                    <p className="text-base text-white font-saira">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    </p>
                    <div className="w-fit px-6 py-3 bg-yellow-300  [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] shadow-lg cursor-pointer">
                        <p className=" text-base text-neutral-950 font-saira font-bold">Devamını Oku</p>
                    
                    </div>
                </div>
                    <img src="/fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full bottom-0"/>
                </div>
        </SwiperSlide>
        </Swiper>
         <div>
            <div className="flex flex-col w-full justify-center items-center gap-5 translate-y-70">
                <div className="flex items-center divide-x divide-neutral-700 -rotate-[4deg]" >
                    <img src="/twitch.png" alt="twitch logo"/>
                    <div className="px-5">
                        <p className="font-saira-condensed text-white text-6xl font-light">HER HAFTA</p>
                        <p className="font-saira-condensed text-yellow-300 text-6xl font-bold">CANLIDAYIZ!</p>
                        <p className="font-saira text-white text-base font-bold">Bizi Takip Edin!</p>
                    </div>
                </div>
                <div className="flex p-3 border border-neutral-700 rounded-2xl gap-3 -rotate-[4deg]" >
                    <button className="bg-purple-600 rounded-md text-white font-[Helvetica] text-sm font-bold py-2 px-3">
                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "15px", marginRight: "10px"}} color="white" />
                        Takip Et
                    </button>
                    <button className="bg-neutral-800 rounded-md text-white font-[Helvetica] text-sm font-bold py-2 px-3" type="button">
                        <FontAwesomeIcon icon={faStar} style={{ fontSize: "15px", marginRight: "10px"}} color="white" />
                        Abone ol
                        <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: "15px", marginLeft: "10px"}} color="white" type="button"/>
                    </button>
                </div>
            </div>
            
            <div className="relative w-full bg-[url('/fans-background-2.png')] bg-contain bg-center bg-no-repeat">
                <div className="relative">
                    <div className="flex justify-around items-end gap-30">
                        <img src="/rapper-3.png" alt="male rapper" className="h-120"/>
                        <img src="/fans-background-1.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full scale-x-[-1]"/>
                        <img src="/rapper-4.png" alt="female rapper" className="h-150"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}