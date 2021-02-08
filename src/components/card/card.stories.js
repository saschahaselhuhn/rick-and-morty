import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchenz",
    status: "Alive",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Death",
    species: "Human",
    origin: { name: "Earth (C-137)" },
  });

export const UnmuscularMichael = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/373.jpeg",
    name: "Unmuscular Michael",
    status: "Alive",
    species: "Human",
    origin: { name: "Unknown" },
  });

export const TUT = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/351.jpeg",
    name: "Three Unknown Things",
    status: "Alive",
    species: "Alien",
    origin: { name: "Unknown" },
  });
