import Section1 from "./components/Section 1/Section1";
import Section2 from "./components/Section 2/Section2";

const App = () => {
  const users = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsum illum eligendi sequi voluptatum dicta hic alias ea neque expedita!",
      tag: "Satisfied",
      number: "1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsum illum eligendi sequi voluptatum dicta hic alias ea neque expedita!",
      tag: "Confusion",
      number: "2",
    },
    {
      image:
        "https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsum illum eligendi sequi voluptatum dicta hic alias ea neque expedita!",
      tag: "Average",
      number: "3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1765217993991-6a921a4deb05?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ipsum illum eligendi sequi voluptatum dicta hic alias ea neque expedita!",
      tag: "Excellent",
      number: "4",
    },
  ];

  return (
    <div>
      <Section1 users={users}  />
      <Section2 />
    </div>
  );
};

export default App;
