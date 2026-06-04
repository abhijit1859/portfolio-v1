import Navbar from "@/components/layout/Navbar";
import './globals.css'
import HeroSection from "@/components/sections/HeroSection";
import TechStack from "@/components/sections/TechStack";
 import GithubHeatmap from "@/components/layout/GithubHeatMap";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
export default function Home(){
  return(
    <main>
      
      <HeroSection/>
      <TechStack/>
      <FeaturedProjects/>
      <GithubHeatmap/>
    </main>
  )
}