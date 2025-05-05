// let name = "Linda"
// let greeting = "Hi there"
// function concat(name , greeting){
//     console.log(greeting+", "+name+"!")
// }
// concat(name,greeting)
// let myPoints = 3
// function add3Points(myP){
//     myP += 3
// }

// function remove1Point(myP){
//     myP -= 1;
// }

// add3Points(myPoints)
// add3Points(myPoints)
// add3Points(myPoints)
// remove1Point(myPoints)
// remove1Point(myPoints)
// console.log(myPoints)

// let errorpara = document.getElementById("error")
// function purchase(){
//     errorpara.textContent="something went wrong"
// }

function getInputValues(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if(num1===" " || num2===" "){
        alert("please enter both numbers!");
        throw new Error("input fields are empty.");
    }
    return {num1,num2};
}
let num1 = document.getElementById("num1")
function sum(){
    const {num1,num2} = getInputValues();
    let res = num1+num2
    document.getElementById("result").textContent =  "Result: " + res
}
function subtract(){
    const {num1,num2} = getInputValues();
    let res = num1-num2
    document.getElementById("result").textContent = "Result: " + res
}
function divide(){
    const {num1,num2} = getInputValues();
    let res = num1/num2
    document.getElementById("result").textContent ="Result: " + res
}
function multiply(){
    const {num1,num2} = getInputValues();
    let res = num1*num2
    document.getElementById("result").textContent= "Result: " + res
}