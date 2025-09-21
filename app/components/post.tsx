interface PostProps {
    number?: number;
    image?: string;
    date?: string;
    username: string;
    content: string;
}

export default function Post({number, image, date, username, content}: PostProps) {

    const formattedDate:String  = date ? new Date(date).toLocaleDateString("en-GB", {day: "numeric",month: "long",year: "numeric",}) : "";
    return (
        <div className="flex gap-15">
            {number && <p className="text-6xl font-saira-condensed text-neutral-800 font-bold">{number < 10? `0${number}` : number}</p>}
            <div className="flex gap-5">
                {image && formattedDate && 
                <div className="flex flex-col gap-5">
                    <div className="w-70 h-40 ">
                        <img src={image} alt={`${username}'s post`} className="object-cover"/>
                    </div>
                    <p className="font-saira text-neutral-700">{formattedDate}</p>
                </div>
                }                    
                <div className="flex flex-col gap-3 divide-y divide-neutral-700">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <img src="./post profile.png" alt="post's user image" />
                            <p className="text-base font-saira text-white font-normal">{username}</p>
                        </div>
                        <p className="text-2xl font-saira-condensed text-white font-bold mb-5 line-clamp-3">{content}</p>
                    </div>
                    <p className="Text-base text-white font-saira cursor-pointer">Daha Fazla Oku</p>
                </div>
            </div>
        </div>
    )
}
