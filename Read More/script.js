function select(data){
var variable = document.querySelectorAll(`${data}`);
return variable;
}




var btn=select(".card button");
var card = select(".card")
var text = select(".more-text")
var dots = select(".dots")
btn.forEach((data, idx)=>{
            data.addEventListener("click",()=>{
                txt=text[idx]
                dot=dots[idx]
    if(data.textContent==='Read More'){
        txt.style.display="inline"
        dot.style.display="none"
        data.textContent="Read Less"
    }
    else{
        txt.style.display="none"
         data.textContent="Read More"
         dot.style.display="inline"

    }
})
})
