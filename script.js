const el = document.querySelector("h2");
const bodyTheme =document.querySelector("body");
//atualizar texto
function atualizarTexto(){
const novoTexto= document.querySelector("textarea");
el.innerHTML=novoTexto.value;
}

//alterar o tamanho do texto
const range = document.querySelector("#range");
const label1 = document.getElementById("labelRange");

range.addEventListener("input",()=>{
let rangeSize= range.value;
label1.textContent= "tamanho: "+range.value+"pxs";
el.style.fontSize=rangeSize+"px";
});

//alterar a cor do texto
const color= document.querySelector("#color");
const label2 = document.getElementById("labelColor");

color.addEventListener("input",()=>{
    let colorValue = color.value;
    el.style.color= colorValue;
})

//botão de tema escuro e claro
function toggleTheme(){
bodyTheme.classList.toggle("darktheme");
}