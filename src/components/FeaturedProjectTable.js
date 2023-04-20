import React from "react";

function FeaturedProjectTable() {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
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
              Check out all of my works!
            </span>
          </a>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 grid-flow-row">
          {/* Mitra App */}
          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <div class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">Mitra</h3>

                <p class="mt-2 text-sm text-white-500">
                  An all-in-one app built with Electron/TypeScript that allows
                  the user to do... all sorts of stuff. Such as Torrent Viewing,
                  where users can watch all the latest anime by streaming directly
                  from magnet links. A Calendar/Notification System, synced up with
                  Milly tha notifies the user of upcoming events. Anime Season Viewer 
                  and more still in progress...
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <a class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">Mitra-Backend (Milly Reiner)</h3>

                <p class="mt-2 text-sm text-white-500">
                  A backend component (Node.js) that handles Mitra's Notification System.
                  It's also a chatbot companion app called 'Milly Reiner' that can assist 
                  the user in various tasks ranging from translation, OCR, weather and 
                  a hybrid conversational model with personality that incorporates GPT3.5's power.

                  Oh, the name is based off one of the AI characters in my game.
                </p>
              </div>
            </a>
          </div>

          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <div class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">
                  Black Galax: Revert
                </h3>

                <p class="mt-2 text-sm text-white-500">
                  My magnum opus. The game that I'm currently making using RPG
                  Maker. It spans over 20+ hours of gameplay, featuring in-depth
                  turn-based battles and an engaging story.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <div class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">
                  Black Galax: Rewrite
                </h3>

                <p class="mt-2 text-sm text-white-500">
                  The continuation of the Black Galax storyline. Featuring even
                  more engaging story and finally the ending to the game! Still
                  in progress.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <a class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">AutoInspire</h3>

                <p class="mt-2 text-sm text-white-500">
                  An app built using .NET. It has image manipulation abilities
                  and also directly scrape the web for quotes which can be
                  directly applied. It's a 'image quote' generator.
                </p>
              </div>
            </a>
          </div>

          <div class="rounded-2xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500 p-1 shadow-xl">
            <a class="glass block rounded-xl bg-gray-900 p-4 sm:p-6 lg:p-8 flex h-full w-full">
              <div class="mt-0">
                <h3 class="text-lg font-bold sm:text-xl">
                  Visual Analytics Dashboard
                </h3>

                <p class="mt-2 text-sm text-white-500">
                  It is a dashboard meant for visualizing certain data. Comes
                  with in-built graphs, choropleth maps and filters to better
                  visualize information.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectTable;
