import "remixicon/fonts/remixicon.css";
import Hero from "./Hero";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div class=" h-full w-1/3 p-5 rounded text-2xl flex flex-col gap-20 flex-between">
      <Hero />
      <Arrow />
    </div>
  );
};

export default LeftContent;
