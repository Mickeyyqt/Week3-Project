import React from "react";
import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 10.23,
    name: "Apple",
    description: "fresh apple from Singapore",
  },
  {
    id: 2,
    price: 28.67,
    name: "Durian",
    description: "fresh Durian from Thiland",
  },
  {
    id: 3,
    price: 12.7,
    name: "Banana",
    description: "fresh banana from Singapore",
  },
  {
    id: 4,
    price: 8.53,
    name: "Kiwi",
    description: "fresh Kiwi from Singapore",
  },
  {
    id: 5,
    price: 20,
    name: "StrawBerry",
    description: "fresh StrawBerry from Singapore",
  },
];
const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit}/>
      ))}
    </section>
  );
};

export default Body;
