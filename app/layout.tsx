'use client';
import { Saira } from "next/font/google";
import { Saira_Condensed } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "./globals.css";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  return (
    
    <html lang="en">
      <body
        className={`${siaraSans.variable} ${siaraCondensedSans.variable} ${siaraCondensedSansLight.variable} antialiased`}
      >
        <header className="flex flex-row justify-around items-center py-[10] bg-border-neutral-950/10 w-full z-10 border-1 border-neutral-900 md:absolute md:backdrop-blur-sm">
          <img src="/logo.svg" alt="Rapkology logo"/>
          <div className={` text-yellow-300 text-3xl cursor-pointer md:hidden`} onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </div>

          <div
            className={`
              fixed top-0 right-0 h-screen w-1/2 bg-yellow-300 flex flex-col gap-10 p-5
              transform transition-transform duration-300 ease-in-out z-30
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
              md:relative md:translate-x-0 md:flex-row-reverse md:items-center md:gap-80 md:bg-transparent md:p-0 md:h-auto md:w-auto
            `}
          >
          <div
              className="text-neutral-950 text-3xl cursor-pointer md:hidden"
              onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>

          <div className="flex flex-row gap-10 items-center text-sm font-siara font-normal">
            <div className="text-xl text-neutral-950 cursor-pointer md:text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <a
              href=""
              className="text-sm py-3 bg-transparent text-neutral-950 font-bold font-saira md:bg-white md:text-black md:px-5 md:text-base"
            >
              GİRİŞ YAP
            </a>
          </div>
          <ul className="flex flex-col gap-[30] text-neutral-black font-bold font-saira text-sm md:font-normal md:text-white md:flex-row">
            <li className="cursor-pointer">HABERLER</li>
            <li className="cursor-pointer">ETKİNLİKLER</li>
            <li className="cursor-pointer">MÜZİKLER</li>
            <li className="cursor-pointer">VİDEOLAR</li>
            <li className="cursor-pointer">İLETİŞİM</li>
          </ul>
        </div>

        </header>
      
        {children}
      </body>
    </html>
  );
}
