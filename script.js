var input = document.querySelector("input");
var button = document.querySelector("button")
var play = document.querySelector(".playground")
console.log(input);

button.addEventListener("click",function(){
    var color = input.value
    console.log(color);
    play.style.backgroundColor = color;
})