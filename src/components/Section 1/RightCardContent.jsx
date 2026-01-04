import React from "react";

const RightCardContent = (props) => {
  return (
    <div class="h-full w-full absolute top-0 left-0 flex justify-between flex-col gap-8 p-5">
      <h2 class="text-black h-10 w-10 text-2xl m-left font-bold rounded-full bg-amber-50 flex justify-center items-center ">
        {/* {props.number.users} */}
        {props.number}
      </h2>
      <div class="flex justify-between flex-col gap-5 ">
        <p class="text-white font-bold mb-6">{props.intro}</p>
        <div class="flex justify-between">
          <button class="text-2xl bg-blue-300 rounded-full w-45">
            {props.tag}
          </button>
          <i class="ri-arrow-right-line text-4xl bg-blue-400 rounded-full "></i>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
