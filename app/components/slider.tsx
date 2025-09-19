"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



export default function Slider() {

  return (
    <div className="bg-neutral-950 relative h-screen w-full  ">
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
                <img src="/fans-background.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full bottom-0"/>
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
                    <img src="/fans-background.png" alt="Crowd of enthusiastic fans gathered at the bottom of the scene in a concert setting with a lively and energetic atmosphere" className="absolute w-full bottom-0"/>
             </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}