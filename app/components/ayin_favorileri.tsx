import Album from "./album"
export default function AyinFavorileri() {
    return (
        <div className="mt-10">
            <div className="w-fit bg-white [clip-path:polygon(0%_0%,_100%_0%,_95%_70%,_0%_100%)] px-40 py-10 translate-y-10">
                <div className="flex justify-around gap-10">
                    <img src="./Youtube logo.png" alt="Youtube logo" className="w-full"/>
                    <img src="./Spotify logo.png" alt="Spotify logo"/>
                </div>
            </div>
            <div className="flex justify-around items-center gap-100 overflow-hidden">
                <p className="font-saira-condensed text-6xl text-white uppercase font-bold ml-20">
                    AYIN
                    <br />
                    FAVORİLERİ
                </p>
                <div className="flex flex-col items-center">
                    <div className="flex gap-10 mb-10">
                        <Album singer="50 cent" albumName="curtis" image="/50-cent.png" rank={2}/>
                        <Album singer="Snopp Dogg" albumName="algorithm" image="/snopp-dogg.png" rank={3}/>
                        <Album singer="Ceza" albumName="Rüzgar" image="/ceza.png" rank={1}/>
                    </div>
                    <div className="w-165 h-1 bg-neutral-800 rounded-full">
                        <div className="w-55 h-1 bg-yellow-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}