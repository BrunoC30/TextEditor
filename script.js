const el = document.querySelector("h2");
const bodyTheme =document.querySelector("body");
//atualizar texto

const exibirCaracteres = document.querySelector("sub");
const textArea = document.querySelector("textarea");
textArea.addEventListener("input",()=>{
let contador = textArea.value.length;    
el.innerHTML= textArea.value
exibirCaracteres.innerHTML=contador +"/"+textArea.maxLength;

})

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

//reverter
function reverse(){
el.classList.toggle("reverse"); 
}

//mudar fonte
/*const menuDeFontes= document.querySelector("#fontes");
menuDeFontes.addEventListener("input",()=>{
let valor = menuDeFontes.value;
console.log("hello");
})
*/