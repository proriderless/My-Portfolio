import React from "react";
import introImage from "../assets/img/version-control.png";

function Introduction() {
  return (
    <div class="w-100 px-4 py-4 sm:py-12 sm:px-6 lg:py-4 lg:px-8 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="hero-content flex-col lg:flex-row-reverse grid grid-cols-2 gap-12 place-self-center">
        <div class="mr-10">
          <img src={introImage} />
        </div>
        <div>
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            About me:
          </h1>
          <p class="py-6">
            I love building things. I've built countless things, ranging from
            games, music, to software.
            <br />
            <br />
            Passionate in development, AI and data analyst!
            <br></br>
            <br></br>I have experience in modern web languages such as
            Javascript, Typescript, Vue.js and React.js. Using them I've built
            dashboards for visual analytics, Electron App for Torrent Anime
            Downloads, Calendar Notification system and etc...
            <br></br>
            <br></br>
            I've also dabbled in machine learning (using python) with experience
            in building recommender models as well as dashboards for stock
            analysis. I'm open to learning new things!
            <br></br>
            <br></br>
            Oh, did I mention I also make mods for
            <i>some games such as Plague Inc, L4D2 and XCOM</i>?<br></br>
            <br></br>
            Currently fiddling around with chatbots, my game, and... my app.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Introduction;
