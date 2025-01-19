import { constructNumber } from "./controllers/numbers/numberController.js";
import { MathOperations } from "./controllers/operations/mathOperations.js";

const numberContainer=document.querySelector(".numbers");
const operations=document.querySelector(".operations");

numberContainer.addEventListener("click",constructNumber);
operations.addEventListener("click",MathOperations);