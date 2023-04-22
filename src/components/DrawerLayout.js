import React from "react";
import { useSessionStorage } from "usehooks-ts";
import NavBar from "./NavBar";

const DrawerLayout = ({ children }) => {
  //initialize state here. we use a key and a default state
  const [open, setOpen] = useSessionStorage("drawer", false);
  return (
    <div className="drawer">
      <input
        id="app-drawer"
        type="checkbox"
        className="drawer-toggle"
        // checked property will now reflect our open state
        checked={open}
      />
      <div className="drawer-content flex flex-col">
        <NavBar />
        {children}
      </div>
      <div className="drawer-side align-middle">
        <label
          className="drawer-overlay "
          // add a onClick handler here to close the drawer
          onClick={() => setOpen(false)}
        ></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-black">
          <li>
            <a href={`/`}>Home</a>
          </li>
          <li>
            <a href={`/projects`}>Personal Projects</a>
          </li>
          <div class="dropdown dropdown-hover">
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
            <ul class="p-2 bg-gray-900 z-50 dropdown-content">
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
          </div>
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
};

export default DrawerLayout;
