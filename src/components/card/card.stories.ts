import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElements";
import { getCharacter, getCharacters } from "../../utils/api";

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
    location: { name: "Lorem Ipsum" },
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Dead",
    species: "Human",
    origin: { name: "Earth (C-137)" },
    location: { name: "Lorem Ipsum" },
  });

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      status: "Dead",
      species: "Human",
      origin: { name: "Earth (C-137)" },
      location: { name: "Lorem Ipsum" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchenz",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (C-137)" },
      location: { name: "Lorem Ipsum" },
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
      location: { name: "Lorem Ipsum" },
    },
  ];

  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(666),
  }),
];

export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];

//=================================================================
export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    className: "randomButton",
    innerText: "Randomizer",
    onclick: async () => {
      const randomNumber = Math.floor(Math.random() * 670) + 1;

      const randomCharacter = await getCharacter(randomNumber);
      characterContainer.innerHTML = "";
      characterContainer.append(createCard(randomCharacter));
    },
  });
  const characterContainer = createElement("div", {
    className: "Container",
  });

  const container = createElement("div", {
    className: "bigContainer",
    childs: [characterContainer, randomButton],
  });
  return container;
};
//=================================================================

export const CharactersFromAPIWithFilter = (
  args,
  { loaded: { characters } }
) => {
  const input = createElement("input", {
    className: "filterInput",
    placeholder: "Search here",
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  const container = createElement("div", {
    className: "bigContainer",
    childs: [input, characterContainer],
  });

  return container;
};

CharactersFromAPIWithFilter.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
