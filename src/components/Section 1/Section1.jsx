import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  // console.log(props.users)
  return (
    <div class="h-screen w-full bg-white ">
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  );
};

export default Section1;
