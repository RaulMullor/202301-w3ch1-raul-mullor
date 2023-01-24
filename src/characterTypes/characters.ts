import { Advisor } from "./Advisor/Advisor";
import { type Character } from "./Character/Character";
import { Fighter } from "./Fighter/Fighter";
import { King } from "./King/King";
import { Squire } from "./Squire/Squire";

const characters: Character[] = [];

const joffrey = new King(
  {
    age: 16,
    family: "Baratheon",
    imageSource: "../img/joffrey.jpg",
    name: "Joffrey",
  },
  2
);

characters.push(joffrey);

const jaime = new Fighter(
  {
    age: 45,
    family: "Lannister",
    name: "Jaime",
    imageSource: "../img/jaime.jpg",
  },
  "spear",
  6
);
characters.push(jaime);

const daenerys = new Fighter(
  {
    age: 30,
    family: "Targaryen",
    name: "Daenerys",
    imageSource: "../img/daenerys.jpg",
  },
  "axe",
  7
);
characters.push(daenerys);

const tyrion = new Advisor(
  {
    age: 40,
    family: "Lannister",
    name: "Tyrion",
    imageSource: "../img/tyrion.jpg",
  },
  daenerys
);
characters.push(tyrion);

const bronn = new Squire(
  {
    age: 54,
    family: "Blackwater",
    imageSource: "../img/bronn.jpg",
    name: "Bronn",
  },
  4,
  jaime
);
characters.push(bronn);
