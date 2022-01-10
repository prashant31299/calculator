const mycalculator = document.querySelector(".mycal")
const mykey=[["1","2","3","+"],["4","5","6","-"],['7','8','9','*'],
['c','0','=','/']]

const myoprator=['+','-','*','/']

let myoutput;
document.addEventListener("DOMContentLoaded",()=>{
    myoutput = document.createElement("div")
    myoutput.innerHTML="0"
    myoutput.classList.add("output")
    mycalculator.appendChild(myoutput)
    console.log(myoutput)
})