const input=document.querySelector(".nums");

export const constructNumber=(e)=>{
    if(e.target.tagName!=="BUTTON") return;

    const textContent=e.target.textContent;

    switch(textContent){
        case("."):
            input.value+=".";
            break;
        case("+/-"):
            input.value.endsWith("(-")?input.value=input.value.slice(0,input.value.length-2):input.value+="(-";
            break;
        default:
            input.value+=e.target.textContent;
    }
}