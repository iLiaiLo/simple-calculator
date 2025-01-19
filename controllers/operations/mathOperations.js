import { calculateResult } from "./CalculateResult.js";

const input=document.querySelector(".nums");

export const MathOperations=(e)=>{

    if(e.target.tagName!=="BUTTON") return;

    const textContent=e.target.textContent;

    switch(textContent){
        case("C"):
            input.value="";
            break;
        case("DEL"):
            input.value=input.value.replaceAll(/.$/g,"");
            break;
        case("="):
            calculateResult(input);
            break;
        case("^"):
            input.value+="**";
            break;
        default:
            input.value+=e.target.textContent;
            break;
    }
}