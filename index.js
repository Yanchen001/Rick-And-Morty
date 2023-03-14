import { createCharacterCard } from "./components/card/card.js";
import { initialNav } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
export const maxPage = 42;
//export let page = 3;
const searchQuery = "";

//try{
export async function fetchCharacters(page) {
  page = page || 1;
  cardContainer.innerHTML = "";
  let url = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(url + "?page=" + page);
  const data = await response.json();
  console.log(data);

  data.results.forEach((result) => {
    let image = result.image;
    let name = result.name;
    let status = result.status;
    let type = result.type;
    let episodes = result.episode.length;

    //console.log(result);

    cardContainer.append(
      createCharacterCard(image, name, status, type, episodes)
    );
  });
}
fetchCharacters();
initialNav();

// } catch(error){
//   console.error(error)
// }
