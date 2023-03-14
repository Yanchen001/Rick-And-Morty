import { createCharacterCard } from "./components/card/card.js"


const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";


async function fetchCharacters(){
  const response = await fetch("https://rickandmortyapi.com/api/character/")
  const data = await response.json();
  console.log(data);

  data.results.forEach((result)=>{
    let image = result.image;
    let name = result.name;
    let status = result.status;
    let type = result.type;
    let episodes = result.episodes

    console.log(result);
    cardContainer.append(createCharacterCard(image,name,status,type,episodes));
  })
}
fetchCharacters();

