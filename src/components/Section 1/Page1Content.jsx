import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div class="flex flex-between px-2 py-3  gap-6 h-[80vh]">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
