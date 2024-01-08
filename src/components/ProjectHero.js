import React from "react";
import mitraImage from "../assets/img/mitra.png";
import autoInspire from "../assets/img/autoinspire.png";

function ProjectHeroBanner(props) {
  return (
    <div class="w-100 px-4 py-4 sm:py-12 sm:px-6 lg:py-4 lg:px-8 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 md:grid-cols-2 gap-12 place-self-center">
        <div class="mr-10">
          <img alt="Black Galax image" src="https://rpgmaker.net/media/content/games/11161/screenshots/BetYourLife.PNG" />
        </div>
        {/* Black Galax Game */}
        <div>
          <h1 class="bg-gradient-to-r from-purple-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Black Galax: Rewrite/Revert
          </h1>
          <p class="py-6">
            This is a game or project that I've been making in my spare time for
            over a decade. The player's journey begins in Cliva, where they will
            initially have four characters to play with that expands into a
            larger character roster. It's a very plot heavy RPG game where game
            time of Revert can span about 24 hours!
          </p>
          <p>
            <div class="mt-4 text-center">
              <a
                class="mr-5 inline-block rounded bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="https://rpgmaker.net/games/11161/"
                target="_blank"
                rel="noreferrer"
              >
                <span class="block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Black Galax: Rewrite
                </span>
              </a>
              <a
                class="inline-block rounded bg-gradient-to-r from-green-300 via-blue-500 to-blue-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="https://rpgmaker.net/games/5874/"
                target="_blank"
                rel="noreferrer"
              >
                <span class="block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent">
                Black Galax: Revert
                </span>
              </a>
            </div>
          </p>
        </div>
      </div>
      {/* Mitra Scheduler */}
      <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 md:grid-cols-2 gap-12 place-self-center">
        <div class="mr-10">
          <img alt="Software image" src={mitraImage} />
        </div>
        <div>
          <h1 class="bg-gradient-to-r from-green-300 via-yellow-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Mitra / Mitra Bot V2
          </h1>
          <p class="py-6">
            This is a combination of desktop app / Telegram chatbot that I've been developing for a while and still in development. 
            <br/><br/>Mitra is an electron-based app built using React / Typescript and MongoDB to store information. <br/><br/>
            Current features include 
            <ul class="list-disc list-inside ml-5" >
                <li>Calendar Notification System - Can notify users via the chatbot</li>
                <li>Stream Anime</li>
                <li>Anime Seasons Viewer</li>
                <li>Chatbot System - Now upgraded V2 with Object & OCR detection.</li>
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
                <span class="block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Mitra (Main) - Open Source
                </span>
              </a>
              <a
                class="inline-block rounded bg-gradient-to-r from-yellow-300 via-yellow-500 to-blue-600 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="https://github.com/proriderless/mitra-app"
                target="_blank"
                rel="noreferrer"
              >
                <span class="block rounded-sm bg-black px-8 py-3 text-sm font-medium hover:bg-transparent">
                  Mitra Bot V2 - PRIVATE
                </span>
              </a>
            </div>
          </p>
        </div>
      </div>
      {/* AutoInspire */}
      <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 md:grid-cols-2 gap-12 place-self-center">
        <div class="mr-10">
          <img src={autoInspire} />
        </div>
        <div>
          <h1 class="bg-gradient-to-r from-green-300 via-green-500 to-white-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Inspiration Image Builder
          </h1>
          <p class="py-6">
            A desktop windows native app built using VB.NET that allows users to directly scrape quotes from the internet
            and create an inspirational image based out of it. <br/><br/>
            Features: <br/>
            <ul class="list-disc list-inside ml-5" >
                <li>Scrape Quotes from the Internet</li>
                <li>Automatically generate an inspirational image</li>
                <li>Image Filters</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeroBanner;
