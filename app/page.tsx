import Hero from "./components/hero";
import Trendler from "./components/trends";
import AyinFavorileri from "./components/month_favorites";
import Explore from "./components/explore";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Trendler/>
      <AyinFavorileri/>
      <Explore/>
    </div>
    
  );
}
