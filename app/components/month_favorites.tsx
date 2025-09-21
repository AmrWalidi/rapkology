import Album from "./album"
export default function AyinFavorileri() {
    return (
        <div className="mt-10">
            <div className="w-fit bg-white [clip-path:polygon(0%_0%,_100%_0%,_95%_70%,_0%_100%)] px-15 py-5 md:translate-y-10 md:px-40">
                <div className="flex justify-start gap-5 md:gap-10 md:justify-around">
                    <img src="./Youtube logo.png" alt="Youtube logo" className="h-5"/>
                    <img src="./Spotify Logo.png" alt="Spotify logo" className="h-6"/>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-10 overflow-hidden md:flex-row md:gap-100">
                <p className="font-saira-condensed text-4xl text-white uppercase font-bold text-center md:ml-20 md:text-left md:text-6xl">
                    AYIN
                    <br />
                    FAVORİLERİ
                </p>
                <div className="flex flex-col items-center gap-10 ">
                    <div className="flex gap-10 mb-10 translate-x-80 md:translate-x-0">
                        <Album singer="50 cent" albumName="curtis" image="/50-cent.png" rank={2}/>
                        <Album singer="Snopp Dogg" albumName="algorithm" image="/snopp-dogg.png" rank={3}/>
                        <Album singer="Ceza" albumName="Rüzgar" image="/ceza.png" rank={1}/>
                    </div>
                    <div className="w-100 h-1 bg-neutral-800 rounded-full md:w-165 md:h-1">
                        <div className="w-33 h-1 bg-yellow-300"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}