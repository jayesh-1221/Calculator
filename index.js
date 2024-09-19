const buttonEle=document.querySelectorAll("button");

const inputValue=document.getElementById("result");

for(let i=0;i<buttonEle.length;i++){
     buttonEle[i].addEventListener("click",()=>{
        const buttonValue=buttonEle[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        }
        else if(buttonValue === "="){
            calculate();
        }
        else{
            appendValue(buttonValue);
        }
     })
}
function clearResult(){
     document.getElementById("result").value=" ";

}
function calculate(){
    inputValue.value=eval(inputValue.value);

}
function appendValue(buttonValue){
           inputValue.value += buttonValue;
}