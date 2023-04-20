import React from "react";
import SkillCard from "./SkillCard";
import { FaReact, FaVuejs, FaJava, FaPython } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSpringboot, SiPandas, SiMysql, SiMongodb } from "react-icons/si";

function SkillCarousel() {
  return (
    <>

        <div class="mx-12">
          <h1 class=" bg-gradient-to-r from-green-300 via-teal-500 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Skills
          </h1>
          <p class="mb-5"> Some of my skills</p>
          <div class="carousel w-full">
            <div
              id="slide1"
              class="carousel-item relative w-full grid grid-cols-2"
            >
              <div class="ml-20">
                <SkillCard
                  icon={<SiJavascript size="40px" />}
                  title="Javascript"
                  description=""
                />
              </div>
              <div class="ml-5 mr-20">
                <SkillCard
                  icon={<SiTypescript size="40px" />}
                  title="Typescript"
                  description=""
                />
              </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* Skills 2 */}
            <div
              id="slide2"
              class="carousel-item relative w-full grid grid-cols-2"
            >
              <div class="ml-20">
                <SkillCard
                  icon={<FaReact size="40px" />}
                  title="React"
                  description=""
                />
              </div>
              <div class="ml-5 mr-20">
                <SkillCard
                  icon={<FaVuejs size="40px" />}
                  title="VueJs"
                  description=""
                />
              </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* Skills 3 */}
            <div
              id="slide3"
              class="carousel-item relative w-full grid grid-cols-2"
            >
              <div class="ml-20">
                <SkillCard
                  icon={<FaJava size="40px" />}
                  title="Java"
                  description=""
                />
              </div>
              <div class="ml-5 mr-20">
                <SkillCard
                  icon={<SiSpringboot size="40px" />}
                  title="SpringBoot"
                  description=""
                />
              </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* Skills 4 */}
            <div
              id="slide4"
              class="carousel-item relative w-full grid grid-cols-2"
            >
              <div class="ml-20">
                <SkillCard
                  icon={<FaPython size="40px" />}
                  title="Python"
                  description=""
                />
              </div>
              <div class="ml-5 mr-20">
                <SkillCard
                  icon={<SiPandas size="40px" />}
                  title="Pandas"
                  description=""
                />
              </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* Skills 5 */}
            <div
              id="slide5"
              class="carousel-item relative w-full grid grid-cols-2"
            >
              <div class="ml-20">
                <SkillCard
                  icon={<SiMysql size="40px" />}
                  title="MySQL"
                  description=""
                />
              </div>
              <div class="ml-5 mr-20">
                <SkillCard
                  icon={<SiMongodb size="40px" />}
                  title="MongoDB"
                  description=""
                />
              </div>
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default SkillCarousel;
