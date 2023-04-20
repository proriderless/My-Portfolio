import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import mitraImage from "../assets/img/mitra.png";
import autoInspire from "../assets/img/autoinspire.png";
import patentWeb from "../assets/img/PatentWebVisualization.png";
import GWR from "../assets/img/GWR.PNG";

function ProjectPage() {
  return (
    <>
      <NavBar />
      <section class="bg-gray-900 text-white">
        <div class="w-100 px-4 py-4 sm:py-12 sm:px-6 lg:py-4 lg:px-8 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
            <div class="mr-10">
              <img alt="Black Galax" src="https://rpgmaker.net/media/content/games/11161/screenshots/BetYourLife.PNG" />
            </div>
            {/* Black Galax Game */}
            <div>
              <h1 class="bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                Black Galax: Rewrite/Revert
              </h1>
              <p class="py-6">
                This is a game or project that I've been making in my spare time
                for over a decade. The player's journey begins in Cliva, where
                they will initially have four characters to play with that
                expands into a larger character roster. It's a very plot heavy
                RPG game where game time of Revert can span about 24 hours!
              </p>
              <p>
                <div class="mt-4 text-center">
                  <a
                    class="mr-5 inline-block rounded bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="https://rpgmaker.net/games/11161/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Black Galax: Rewrite
                    </span>
                  </a>
                  <a
                    class="inline-block rounded bg-gradient-to-r from-green-300 via-blue-500 to-blue-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="https://rpgmaker.net/games/5874/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Black Galax: Revert
                    </span>
                  </a>
                </div>
              </p>
            </div>
          </div>
          {/* Mitra Scheduler */}
          <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
            <div class="mr-10">
              <img alt="Mitra" src={mitraImage} />
            </div>
            <div>
              <h1 class="bg-gradient-to-r from-green-300 via-yellow-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                Mitra / Mitra-Scheduler
              </h1>
              <p class="py-6">
                This is a combination of desktop app / Telegram chatbot that
                I've been developing for a while and still in development.
                <br />
                <br />
                Mitra is an electron-based app built using React / Typescript
                and MongoDB to store information. <br />
                <br />
                Current features include
                <ul class="list-disc list-inside ml-5">
                  <li>
                    Calendar Notification System - Can notify users via the
                    chatbot
                  </li>
                  <li>Stream Anime</li>
                  <li>Anime Seasons Viewer</li>
                  <li>GPT-4 Chatbot System (Milly Reiner)</li>
                </ul>
              </p>

              <p>
                <div class="mt-4 text-center">
                  <a
                    class="mr-5 inline-block rounded bg-gradient-to-r from-green-300 via-green-500 to-yellow-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="https://github.com/proriderless/mitra-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Mitra (Main) - Open Source
                    </span>
                  </a>
                  <a
                    class="inline-block rounded bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="https://github.com/proriderless/mitra-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Mitra-Scheduler (Milly Reiner) - PRIVATE
                    </span>
                  </a>
                </div>
              </p>
            </div>
          </div>
          {/* Geographically Weighted */}
          <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
            <div class="mr-10">
              <img alt="GWR" src={GWR} />
            </div>
            <div>
              <h1 class="bg-gradient-to-r from-red-300 via-red-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl">
                Geographically-weigted Regression Model for Hedonic HDB Pricing
              </h1>
              <p class="py-6">
                An app built using Shiny package in R to create the interface for EDA and regression analysis.<br />
                <br/>Unlike typical linear regression methods, our model takes into account spatial heterogenity
                and the effects different neighbourhoods can have on the proximity of important locations
                which increases the accuracy of our model to a 0.94 R2 score.
                <br />
              </p>
              <div class="mt-4 text-center">
                  <a
                    class="mr-5 inline-block rounded bg-gradient-to-r from-red-300 via-red-500 to-red-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    href="https://github.com/wyt05/GeoSpatialProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="block rounded-sm bg-gray-900 px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Click to access
                    </span>
                  </a>
                </div>
            </div>
          </div>
          {/* Patent Web Builder */}
          <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
            <div class="mr-10">
              <img alt="Patent web application" src={patentWeb} />
            </div>
            <div>
              <h1 class="bg-gradient-to-r from-blue-300 via-blue-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                Patent Web Visualization Dashboard
              </h1>
              <p class="py-6">
                A full-stack application built using MEVN stack (MongoDB, Express, Vue.js, Node.js) that
                allows users to easily catch a glimpse of all the data they need.<br />
                <br />Comes in-built with various filters, allowing the user to drill down to only the
                information they wish to view on the dashboard.
                
              </p>
            </div>
          </div>
          {/* AutoInspire */}
          <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
            <div class="mr-10">
              <img alt="Autoinspire" src={autoInspire} />
            </div>
            <div>
              <h1 class="bg-gradient-to-r from-green-300 via-green-500 to-white-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                Inspiration Image Builder
              </h1>
              <p class="py-6">
                A desktop windows native app built using VB.NET that allows
                users to directly scrape quotes from the internet and create an
                inspirational image based out of it. <br />
                <br />
                Features: <br />
                <ul class="list-disc list-inside ml-5">
                  <li>Scrape Quotes from the Internet</li>
                  <li>Automatically generate an inspirational image</li>
                  <li>Image Filters</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-3xl">
              Other Projects Showcase
            </h1>

            <p class="mt-4 text-gray-300">
              Below are the remaining projects I've done:
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 grid-flow-row">
            

            <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
              <a class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
                <div class="mt-0">
                  <h3 class="text-lg font-bold sm:text-xl">
                    Webinar Video Auto-Chaptering System (FYP)
                  </h3>

                  <p class="mt-2 text-sm text-white-500">
                    Using a combination of intuitive ML techniques to automatically identify segments in a video
                    and summarize them to obtain a Chapter title. This is a linear text segmentation problem that
                    requires consideration of the sequence of chapters. Therefore, we've used Kernel Change Point
                    Detection using Cosine Similarity as our Cost Function to detect segments.
                  </p>
                </div>
              </a>
            </div>

            <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
              <a class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
                <div class="mt-0">
                  <h3 class="text-lg font-bold sm:text-xl">
                    Porfolio Evaluator App
                  </h3>

                  <p class="mt-2 text-sm text-white-500">
                    It's an app that allows the user to evaluate their portfolio
                    using statistical methods such as efficient frontier with
                    sortino/sharpe ratio which balances the risk and reward for
                    optimal portfolio allocation. It also contains sentimental
                    analysis for news headlines and technical analysis for
                    analyzing a single stock.
                  </p>
                </div>
              </a>
            </div>
            <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
              <div class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
                <div class="mt-0">
                  <h3 class="text-lg font-bold sm:text-xl">Infinite Loop</h3>

                  <p class="mt-2 text-sm text-white-500">
                    Another game I made for a contest. Won the best atmosphere award!
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
              <div class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
                <div class="mt-0">
                  <h3 class="text-lg font-bold sm:text-xl">Black Galax: Blood Legacy</h3>

                  <p class="mt-2 text-sm text-white-500">
                    The origin story of the main Black Galax game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProjectPage;
