
import { prevButton } from "../../index.js"
import { nextButton } from "../../index.js"
//import { page } from "../../index.js"
import { maxPage} from "../../index.js"
import { fetchCharacters } from "../../index.js"

let page = 1;
const error = "not valid page"
export function initialNav(){
    prevButton.addEventListener("click",()=>{
    if(page > 1){
    page = page-1;
    } else {
        console.error(error)
        }
     fetchCharacters(page)
});


nextButton.addEventListener("click",()=>{
    if(page < maxPage){
    page = page +1;
    } else {
        console.error(error)
        }
    fetchCharacters(page)
})
}
