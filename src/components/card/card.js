import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("div", {
    className: "card",
    children: [
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
