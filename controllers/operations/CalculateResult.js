export const calculateResult=(input)=>{
    try{
        const calculate=new Function(`return ${input.value}`)
        const result=calculate(input.value)

        input.value=Math.round(result*1e8)/1e8;

        if (isNaN(result)) {
            input.value = "result is undefined";
        }
        else if (result === Infinity) {
            input.value = "can't divide by zero!";
        }

    }
    catch(e){
      input.value = "incorrect expression!";
    }
}