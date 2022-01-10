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
    // for remove the zeros
    if(mycal=='0'){
        mycal=""
    }

    if(myval =="="){
        mycal=eval(mycal)
    }else{
    let lastchar = mycal.substring(mycal.length-1)
    if(myoprator.includes(myval)){
        if(myoprator.includes(lastchar)){
            mycal=mycal.substring(0,mycal.length-1);
        }else{
            mycal=eval(mycal);

        }
    }
    }
if(myval=="c"){
    mycal
}
    
    mycal=mycal+myval
    myoutput.innerText=mycal
    console.log( myoutput)
}
