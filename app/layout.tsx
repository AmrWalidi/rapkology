import { Saira } from "next/font/google";
import { Saira_Condensed } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

const siaraSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

const siaraCondensedSans = Saira_Condensed({
  variable: "--font-saira-condensed-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const siaraCondensedSansLight = Saira_Condensed({
  variable: "--font-saira-condensed-sans-light",
  subsets: ["latin"],
  weight: ["300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${siaraSans.variable} ${siaraCondensedSans.variable} ${siaraCondensedSansLight.variable} antialiased`}
      >
        <header className="absolute flex flex-row justify-around items-center py-[10] backdrop-blur-sm bg-black/10 w-full z-10 border-1 border-neutral-900">
          <img src="/logo.svg" alt="Rapkology logo"/>
          <div className="flex flex-row gap-80 items-center">
            <nav  className="flex flex-row gap-[50] justify-between items-center ">   
            <ul className="flex flex-row gap-[30] font-saira font-normal text-sm text-white">
              <li className="cursor-pointer">HABERLER</li>
              <li className="cursor-pointer">ETKİNLİKLER</li>
              <li className="cursor-pointer">MÜZİKLER</li>
              <li className="cursor-pointer">VİDEOLAR</li>
              <li className="cursor-pointer">İLİTİŞİM</li>
            </ul>
            </nav>
            <div className="flex flex-row gap-10 items-center text-sm font-siara font-normal">
            <div className="w-6">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "22px", cursor:"pointer" }} color="white" />  
              </div>   
              <a href="" className="px-5 py-3 bg-white text-black font-bold font-saira">GİRİŞ YAP</a>
            </div>
          </div>
          
        </header>
      
        {children}
      </body>
    </html>
  );
}
