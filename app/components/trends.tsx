import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import Post from "./post"
import posts from "../data/posts.json"

interface postData {
    authors: string;
    content: string;
}

export default function Trendler() {
    return (
        <div className="mx-10 mt-20 md:mx-20 md:mt-40 ">
            <div className="flex items-center justify-center gap-5 md:gap-10 md:justify-start">
                <p className="font-saira-condensed text-4xl  text-white uppercase font-bold md:text-6xl">trendler</p>
                <div className="text-4xl text-yellow-300 md:text-6xl">
                    <FontAwesomeIcon icon={faArrowTrendUp}/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-15 mt-10 md:grid md:grid-cols-3  md:mt-20">
               {posts.map((item, index) => (
                    <Post key={index} number={index +1} username={item.attributes.authors[0]} content={item.attributes.content}/>
                ))} 
            </div>
            <div className="flex justify-center mt-10 ">
                <div className="w-fit px-10 py-3 bg-white [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)] cursor-pointer group hover:bg-neutral-950 transition-colors duration-200">
                    <p className=" text-base text-neutral-950 font-saira font-bold group-hover:text-white">Tümünü Gör</p>      
                </div>
            </div>
        </div>
    )
}