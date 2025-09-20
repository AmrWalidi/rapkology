interface PostProps {
    number?: number;
    image?: string;
    username: string;
    content: string;
}

export default function Post({number, image, username, content}: PostProps) {
    return (
        <div className="flex gap-15">
            {number && <p className="text-6xl font-saira-condensed text-neutral-800 font-bold">{number < 10? `0${number}` : number}</p>}
            {image && <img src={image} alt={`${username}'s post`} />}
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
    )
}
