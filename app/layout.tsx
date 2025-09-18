import { Saira } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";

const siaraSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${siaraSans.variable} antialiased`}
      >
        <header className="absolute flex flex-row justify-around items-center py-[10] backdrop-blur-sm bg-black/10 w-full z-10 border-1 border-neutral-900">
          <img src="/logo.svg" alt="Rapkology logo"/>
          <div className="flex flex-row gap-80 items-center">
            <nav  className="flex flex-row gap-[50] justify-between items-center ">   
            <ul className="flex flex-row gap-[30] text-2xl font-siara font-normal text-sm text-white">
              <li>HABERLER</li>
              <li>ETKİNLİKLER</li>
              <li>MÜZİKLER</li>
              <li>VİDEOLAR</li>
              <li>İLİTİŞİM</li>
            </ul>
            </nav>
            <div className="flex flex-row gap-10 items-center text-sm font-siara font-normal">
            <div className="w-6">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "22px" }}/>  
              </div>   
              <a href="" className="px-5 py-3 bg-white text-black font-bold">GİRİŞ YAP</a>
            </div>
          </div>
          
        </header>
      
        {children}
      </body>
    </html>
  );
}
