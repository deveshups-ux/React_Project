import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div class="h-full w-70 rounded-4xl overflow-hidden shrink-0 relative">
      <img
        class="h-full w-full object-cover "
        src={props.image}
        alt=""
      />
      <RightCardContent number={props.number}  tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;
