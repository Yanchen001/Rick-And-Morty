
import { prevButton } from "../../index.js"
import { nextButton } from "../../index.js"
const pagination = document.querySelector('[data-js="pagination"]');
//import { page } from "../../index.js"

import { fetchCharacters } from "../../index.js"

let page = 1;
const maxPage = 42
const error = "not valid page"
export function initialNav(){
    prevButton.addEventListener("click",()=>{
    if(page > 1){
    page = page - 1;
    } else {
        console.error(error)
        }
     fetchCharacters(page)
     
});


nextButton.addEventListener("click",()=>{
    if(page < maxPage){
    page = page + 1;
    } else {
        console.error(error)
        }
    fetchCharacters(page)
})
//pagination.textContent = `${page}/${maxPage}` 


}


