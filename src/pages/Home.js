import React from "react";
import NavBar from "../components/NavBar";
import HeroComp from "../components/Hero";
import Introduction from "../components/Introduction";
import Footer from "../components/Footer";
import SkillCarousel from "../components/SkillCarousel";
//import FeaturedProjectTable from "../components/FeaturedProjectTable";
import ProjectHeroBanner from "../components/ProjectHero";

function Home() {
  return (
    <>
      <div class="bg-gray-900">
        <NavBar />
        <div class="mx-auto bg-gray-900 bg-opacity-80">
          <HeroComp />
          <Introduction />
          <SkillCarousel />
          <div class="mx-auto mt-5 max-w-lg text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-3xl">
              Featured Project Showcase
            </h1>

            <p class="mt-4 text-gray-300">Check it out!</p>
          </div>
          <div class="mt-4 text-center">
            <a
              class="inline-block rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href="/projects"
            >
              <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                Click here if you're interested to see more!
              </span>
            </a>
          </div>
          <ProjectHeroBanner />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
