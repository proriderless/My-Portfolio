import React, { useRef, useEffect, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

function HeroComp() {
  const [vantaEffect, setVantaEffect] = React.useState(null);
  const myRef = useRef(null);

  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          //minHeight: 200.0,
          //minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0.5,
          color: 0x0,
          backgroundColor: 0x0,
          //color: 0x314cfa,
          //backgroundColor: 0xf0f0f,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
    ref={myRef}
    >
      <div class="hero min-h-screen w-full px-4 py-8 sm:py-12 sm:px-6 lr:py-16 lg:px-8">
      <div class="hero-content flex text-center m-auto m-auto">
        <div class="inline-flex items-center justify-center text-center">
          <picture>
            <source
              srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
              alt="👋"
              width="128"
              height="128"
            />
          </picture>
          <div class="pl-10 text-center">
            <h1 class="bg-gradient-to-r from-red-300 via-purple-300 to-pink-300 bg-clip-text text-5xl bg-gradient-to-r font-extrabold text-transparent text-center">
              Hi There!
            </h1>
            <h3 class="py-6 text-white text-center">Welcome to my little corner of the web!</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroComp;
