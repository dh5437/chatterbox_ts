import React from "react";

const Practice: React.FC = () => {
  let age: number = 25;
  interface Person {
    name: string;
    age: number;
  }

  let alice: Person = {
    name: "Alice",
    age: 25,
  };

  return (
    <>
      <h1>Hi, here is to practice TypeScript</h1>
      <h3>{age}</h3>
      <h2>{alice.name}</h2>
    </>
  );
};

export default Practice;
