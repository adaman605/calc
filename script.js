const counter = document.getElementById("counter");

function btnClick(input){
    counter.value += input;

}
function resetCounter(){
    counter.value = ``;
}
function equal(){
    try{
        counter.value = eval(counter.value)
    } 
    catch(error){
        counter.value = "Error";
    }
}
function backspace(){
    counter.value = counter.value.slice(1, counter.value.length)
}



