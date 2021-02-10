import { createElement } from "../../utils/createElements";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("img", {
        className: `${
          status === "Alive" ? "card__portraitAlive" : "card__portraitDeath"
        }`,
        src: imgSrc,
      }),
      createElement("h2", {
        className: "card__name",
        innerText: name,
      }),
      createElement("p", {
        className: "card__species",
        innerText: "Species: " + species,
      }),
      createElement("p", {
        innerText:
          "Status: " + `${status === "Alive" ? "🥳🎉" : "💀"} - ${status}`,
      }),
      createElement("p", {
        className: "card__origin",
        innerText: "Origin: " + origin.name,
      }),
    ],
  });
}
