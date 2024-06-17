/*
Goal: create an on screen calculator using javascript and html

*/ 


document.body.style.background = "linear-gradient(to left,#ff7e5f, #feb47b)";
const container = document.createElement("container");
const numBtn = document.querySelectorAll(".numBtn")
const ac = document.querySelector(".ac")
const operatorBtn = document.querySelectorAll(".operatorBtn")
const readOut = document.querySelector(".readOut")
const button = document.querySelectorAll("button:not(.ac")
const result = document.querySelector(".result")


button.forEach(button => {
    button.addEventListener("click", () => {
        readOut.append(button.innerText)
    })
})

let obj ={
    first: "",
    operation:"",
    second:"",
}

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        if( obj.operation == ""){
        obj.operation = button.innerText
        console.log(button.innerText)
        console.log(obj)
        }else{
            obj.first = ""
            obj.operation = ""
            obj.second = ""
            result.textContent= ""
            readOut.textContent = ""

        }
    });
});



ac.addEventListener("click", () => {
    obj.first = ""
    obj.operation = ""
    obj.second = ""
    result.textContent= ""
    readOut.textContent = ""
})
function calculate(first,operation,second){
    first = Number(first)
    second = Number(second)
    if(operation == "+"){
        result.textContent = first + second
    }else if(operation == "-"){
        result.textContent = first - second
    }else if(operation == "/"){
        if(second == 0 ){result.textContent = "undefined"}
        else{
            result.textContent = first/second
        }

    }else if(operation == "*"){
        result.textContent = first*second
        pass
    }   
    result
}



numBtn.forEach(button => {
    button.addEventListener('click', () => {
        //console.log(button.innerText)
        if(obj.operation == "+" || obj.operation == "/" || obj.operation == "*" || obj.operation =="-"){
            obj.second = obj.second.concat(button.innerText)
            console.log(obj)
            console.log(calculate(obj.first,obj.operation,obj.second))
        } else { 
        obj.first = obj.first.concat(button.innerText)
        console.log(obj)
        
        }
    
    });
});








/*
Add event listeners to each button that 
use the forEach function. that appends inertext to 
a variable that 
readout variable 


have one



*/ 




