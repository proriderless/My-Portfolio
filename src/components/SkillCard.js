import React from "react";

//import { FaReact } from "react-icons/fa";

function SkillCard(props) {
  const { icon, title, description } = props;
  return (
    <>
      <div class="rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8">
      <h3 class="mt-3 text-lg font-bold text-white sm:text-xl text-center flex flex-inline justify-center align-bottom">
          {icon}
        </h3>
        <h3 class="mt-3 text-lg font-bold text-white sm:text-xl text-center flex flex-inline justify-center align-bottom">
          {title}
        </h3>

        <p class="mt-4 text-sm text-gray-300 text-center">{description}</p>
      </div>
    </>
  );
}

export default SkillCard;
