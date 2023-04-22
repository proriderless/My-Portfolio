import React from "react";
import { useSessionStorage } from "usehooks-ts";

function NavBar() {

  const [, setOpen] = useSessionStorage("drawer", false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <div class="navbar w-100 text-white bg-black bg-opacity-100 sticky top-0 z-50">
      <div class="flex-1">
        {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="flex-none lg:hidden items-start">
        <label className="btn btn-square btn-ghost" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal px-5">
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/projects`}>Personal Projects</a>
          </li>
          <li tabindex="0">
            <a>
              My Games
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 z-50">
              <li>
                <a
                  href="https://rpgmaker.net/games/5874/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Black Galax: Revert
                </a>
              </li>
              <li>
                <a
                  href="https://rpgmaker.net/games/11161/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Black Galax: Rewrite
                </a>
              </li>
              <li>
                <a
                  href="https://rpgmaker.net/games/6536/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Black Galax: Blood Legacy
                </a>
              </li>
              <li>
                <a
                  href="https://rpgmaker.net/games/6025/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Infinite Loop
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://soundcloud.com/razerpg"
              target="_blank"
              rel="noreferrer"
            >
              Music
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
