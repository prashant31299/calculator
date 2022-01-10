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
    for(let y =0 ; y< mykey.length;y++){
        let div =document.createElement("div")
        div.classList.add("row")
        for (let x=0;x<mykey[y].length;x++){
            let btn=document.createElement("div")
            btn.innerHTML=mykey[y][x]
            btn.classList.add("btn")
            btn.addEventListener("click",btnHit);
            div.appendChild(btn)
        }
        mycalculator.appendChild(div)
        console.log(div);
    }

    
})

function btnHit(e){
    let myval=this.innerText
    let mycal=myoutput.innerText
    
    mycal=mycal+myval
    myoutput.innerText=mycal
    console.log( myoutput)
}
