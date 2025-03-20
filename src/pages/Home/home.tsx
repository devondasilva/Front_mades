import "../../App.css"
import Stats from "../../components/body/stats/stats";
import Formations from "../../components/body/formations/formations";
import Video from "../../components/body/videos/video";
import Add from "../../components/body/add/add";
import Foot from "../../components/footer/foot/foot";
import Reviews from "../../components/body/reviews/reviews";


// import { useState } from "react"

export default function Home() {
  // const [showFoot, setShowFoot] = useState(true);
  return (
    <>
        
        <div className="bg-slate-200">
          <Stats />
          <Formations />
        </div>
      
      <Video />
      <Add />
      <Reviews />
      <Foot />
    </>
  );
}
