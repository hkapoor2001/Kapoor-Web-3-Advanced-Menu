import { burgerTL } from "./burgerAnimation.js";
var burgerButton= document.querySelector("#burger")

burgerButton.addEventListener("click", OpenCloseMenu)

let CanISeeMenu = false;
function OpenCloseMenu(){
    if(CanISeeMenu === false){
        burgerTL.play();
        CanISeeMenu = true;
    }
    else{
        burgerTL.reverse();
        CanISeeMenu = false;
    }
}