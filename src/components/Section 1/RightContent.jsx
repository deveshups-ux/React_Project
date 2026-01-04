import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div class="h-full w-2/3 rounded-4xl p-5 flex justify-between flex-nowrap overflow-x-auto items-center gap-5 ">
      {props.users.map((elem) => {
        return <RightCard image={elem.image} number={elem.number} tag={elem.tag} intro={elem.intro} />;
      })}
    </div>
  );
};

export default RightContent;
