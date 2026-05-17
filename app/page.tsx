import Navbar from "@/components/layout/Navbar";
import './globals.css'
import HeroSection from "@/components/sections/HeroSection";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import GithubHeatmap from "@/components/layout/GithubHeatMap";
export default function Home(){
  return(
    <main>
      <Navbar/>
      <HeroSection/>
      <TechStack/>
      <FeaturedProjects/>
      <GithubHeatmap/>
    </main>
  )
}