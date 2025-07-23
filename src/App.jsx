import React, { useState } from "react";
// import styles from "./App.module.css";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (selectedFighter) => {
    if (money > selectedFighter.price) {
      setTeam((prevState) => [...prevState, selectedFighter]);

      setZombieFighters((prevState) =>
        prevState.filter(
          (remainingFighters) => remainingFighters.id !== selectedFighter.id
        )
      );

      setMoney((prevState) => prevState - selectedFighter.price);
    } else {
      console.log("Not enough money");
    }
  };

  const message = "Pick some team members!";
  const displayMessage = () => {
    return team.length < 1 && message;
  }; // why i didnt invoke it, it will run?

  const totalCalculation = (statsType) =>
    statsType.reduce((total, num) => {
      return (total += num);
    }, 0);

  const strengthArray = team.map((teamFighter) => teamFighter.strength); //callback function since one line no need return.
  const agilityArray = team.map((teamFighter) => teamFighter.agility);

  let totalStrength = totalCalculation(strengthArray);
  let totalAgility = totalCalculation(agilityArray);

  const handleRemoveFighter = (removedFighter) => {
    setTeam((prevState) =>
      prevState.filter((teamFighters) => teamFighters.id !== removedFighter.id)
    );

    setMoney((prevState) => prevState + removedFighter.price);
  };

  // how to define single root?
  return (
    <div>
      <div>Money:{money}</div>
      <div>Team Strength:{totalStrength}</div>
      <div>Team Agility:{totalAgility}</div>
      <div>
        Team:{" "}
        <ul>
          {team.map((teamFighter) => (
            <li key={teamFighter.id}>
              <p>{teamFighter.name}</p>
              <p>Str: {teamFighter.strength}</p>
              <p>Agi: {teamFighter.agility}</p>
              <button onClick={() => handleRemoveFighter(teamFighter)}>
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>{message}</div>
      <div>Fighters</div>
      <ul>
        {zombieFighters.map((zombieFighter) => {
          return (
            <li id={zombieFighter.id}>
              <img src={zombieFighter.img} />
              <p>{zombieFighter.name}</p>
              <p>price:{zombieFighter.price}</p>
              <p>strength:{zombieFighter.strength}</p>
              <p>agility:{zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>
                Add
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//Warning: Each child in a list should have a unique "key" prop.
export default App;
