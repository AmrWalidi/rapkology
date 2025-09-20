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
        <div className=" mx-10 mt-50">
            <div className="flex gap-10">
                <p className="font-saira-condensed text-6xl text-white uppercase font-bold">trendler</p>
                <FontAwesomeIcon icon={faArrowTrendUp} style={{ fontSize: "65px"}} color="#F0E74D" />
            </div>
            <div className="grid grid-cols-3 gap-15 mt-10">
               {posts.map((item, index) => (
                    <Post key={index} number={index +1} username={item.attributes.authors[0]} content={item.attributes.content}/>
                ))} 
            </div>
            <div className="flex justify-center mt-10 ">
                <div className="w-fit px-10 py-3 bg-white [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_5%_92%)]  cursor-pointer">
                    <p className=" text-base text-neutral-950 font-saira font-bold">Tümünü Gör</p>      
                </div>
            </div>
        </div>
    )
}