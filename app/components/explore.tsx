'use client'

import Post from "./post"
import posts from "../data/posts.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompass } from "@fortawesome/free-regular-svg-icons"
import { faGridHorizontal, faMagnifyingGlass, faBars, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faDiscord, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"

export default function Explore() {
    const [selectedTag, setSelectedTag] = useState<string>("Türk Rap");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const categories = ["HABERLER", "ETKİNLİKLER", "MÜZİKLER", "VİDEOLAR","İLİTİŞİM"];
    const tags = ["Türk Rap", "Yabancı Rap", "Rap Haberleri", "Haftanın Klipleri","Ayın Klipleri","Rap sohbetleri","Rap Müsabakları"];

    
  
    const filteredPosts = posts.filter((post) => {
    
        const tagToCheck =
            selectedTag === "Haftanın Klipleri"
            ? "Haftanın Videoları"
            : selectedTag === "Ayın Klipleri"
            ? "Ayın Videoları"
            : selectedTag;

        const tagMatch = post.attributes.tags.includes(tagToCheck);

        return tagMatch;
    });
    return (
        <div className="mx-10 mt-40 md:mx-20">
            <div className="flex flex-col gap-10 md:flex-row items-start gap-0">
                <div className="flex justify-between items-center w-full md:w-3/5">
                    <div className="flex gap-2 md:gap-5">
                        <p className="font-saira-condensed text-white uppercase font-bold text-4xl md:text-6xl">keşfet</p>
                        <div className="text-yellow-300 text-4xl md:text-5xl">
                            <FontAwesomeIcon icon={faCompass} />
                        </div>
                        
                    </div>
                    <div className="flex gap-5">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "22px"}} color="white"/>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: "22px"}} color="white"/>
                        <FontAwesomeIcon icon={faGridHorizontal} style={{ fontSize: "22px"}} color="white"/>
                    </div>
                </div>
                <div className="flex flex-col w-full overflow-hidden md:w-fit ">
                    <p className="text-4xl text-white uppercase font-saira-condensed font-bold">NE GÖRMEK İSTERSİN?</p>
                    <div className="flex gap-3 mt-10 flex-nowrap  md:flex-wrap md:w-100">
                        {
                            tags.map((tag, index) => (
                                <button key={index} className={`text-nobreak px-4 py-2 font-saira cursor-pointer ${selectedTag == tag ? 'border-2 border-neutral-950 text-nuetral-950 bg-yellow-300 font-bold' : 'border border-white text-white'}`} onClick={() => setSelectedTag(tag)}>{tag}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pb-20 md:flex-row mt-10 md:mt-0">
                {
                    filteredPosts.length == 0 ? <p className="text-white font-saira text-2xl">Bu kategoride henüz bir içerik bulunmamaktadır.</p> :
                    <div className="flex flex-col items-center gap-20 md:w-3/5 md:-translate-y-20 md:items-start">
                        {
                            filteredPosts.map((post, index) => (
                                <Post key={index} username={post.attributes.authors[0]} content={post.attributes.content} image={post.attributes.img} date={post.updatedAt}/>
                        ))}
                        <div className="w-fit px-10 py-3 bg-white [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] cursor-pointer group hover:bg-neutral-950 transition-colors duration-200">
                            <p className=" text-base text-neutral-950 font-saira font-bold group-hover:text-white">Tümünü Gör</p>      
                        </div>
                    </div>  
                }   
                <div className="flex flex-col mt-20 md:mt-50 md:w-1/4">
                    <p className="text-2xl text-white font-saira-condensed font-bold uppercase md:text-4xl">GELİŞMELERDEN İLK SEN HABERDAR OL!</p>
                    <div className="border-b border-neutral-700 flex justify-between items-center mt-14 pb-5">
                        <p className="font-saira text-white uppercase text-sm font-bold">Email</p>
                        <button className="font-saira text-yellow-300 uppercase text-sm font-bold cursor-pointer" >Gönder <FontAwesomeIcon icon={faArrowRight} style={{fontSize: "10px", color: "#F0E74D"}}/> </button>
                    </div>
                    <div className="flex gap-2 mt-10">
                        <div className="text-3xl text-yellow-300"><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className="text-3xl text-yellow-300"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="text-3xl text-yellow-300"><FontAwesomeIcon icon={faDiscord} /></div>
                        <div className="text-3xl text-yellow-300"><FontAwesomeIcon icon={faSpotify} /></div>
                        <div className="text-3xl text-yellow-300"><FontAwesomeIcon icon={faYoutube} /></div>
                    </div>
                    <ul className="flex flex-row flex-wrap gap-[30] font-saira font-normal text-sm text-white mt-20 w-4/5">
                        {
                            categories.map((category, index) => (
                                <li key={index} className="cursor-pointer" onClick={()=>setSelectedCategory(category)}>{category}</li>
                            ))
                        }
                    </ul>
                    <p className="font-saira text-neutral-700 text-sm mt-10">© RAPKOLOGY All Rights Are Reserved 2022.</p>
                </div>
            </div>
        </div>
    )
}