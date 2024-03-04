
function one(){
    document.getElementById("nums").value+="1";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="1";
        flag=false;
    }
}
function two(){
    document.getElementById("nums").value+="2"
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="2";
        flag=false;
    } 
}
function three(){
    document.getElementById("nums").value+="3"
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="3";
        flag=false;
    }
}
function four(){
    document.getElementById("nums").value+="4"
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="4";
        flag=false;
    }
}
function five(){
    document.getElementById("nums").value+="5";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="5";
        flag=false;
    }
}
function six(){
    document.getElementById("nums").value+="6";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="6";
        flag=false;
    }
}
function seven(){
    document.getElementById("nums").value+="7";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="7";
        flag=false;
    } 
}
function eight(){
    document.getElementById("nums").value+="8";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="8";
        flag=false;
    } 
}
function nine(){
    document.getElementById("nums").value+="9";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="9";
        flag=false;
    }
}
function zero(){
    document.getElementById("nums").value+="0";
    if(flag){
        document.getElementById("nums").value=""
        document.getElementById("nums").value+="0";
        flag=false;
    }
}
var fl=true
function sign(){
    if(fl){
        document.getElementById("nums").value="-"+document.getElementById("nums").value;
        fl=false;
        }
    else{
          document.getElementById("nums").value=document.getElementById("nums").value.replace("-","");
          fl=true;
    }
}
function dot(){
    document.getElementById("nums").value+=".";
    flag=false;  
}
function cl(){
    document.getElementById("nums").value="";
}
function del(){
    document.getElementById("nums").value=document.getElementById("nums").value.replaceAll(/.$/g,"");
}
function addition(){
    document.getElementById("nums").value+="+";
    flag=false;
}
function substraction(){
    document.getElementById("nums").value+="-";
    flag=false;
}
function mult(){
    document.getElementById("nums").value+="*";
    flag=false;
}
function division(){
    document.getElementById("nums").value+="/";
    flag=false;
}
function left_par(){
    document.getElementById("nums").value+="("
  if(flag){
    document.getElementById("nums").value="";
    document.getElementById("nums").value+="("
    flag=false;
  }
}
function right_par(){
    document.getElementById("nums").value+=")";
    if(flag){
      document.getElementById("nums").value="";
      document.getElementById("nums").value+=")";
      flag=false;
    }
}

var flag=false;

function result(){
    try{
        const res=new Function(`return ${document.getElementById("nums").value}`)
        document.getElementById("nums").value=Math.round(res(document.getElementById("nums").value)*1e8)/1e8;

        if (isNaN(res(document.getElementById("nums").value))) {
            document.getElementById("nums").value = "result is undefined";
        } else if (res(document.getElementById("nums").value) === Infinity) {
            document.getElementById("nums").value = "can't divide by zero!";
        }
        }
        catch(e){
          document.getElementById("nums").value = "incorrect expression!";
        }
        flag=true;
}