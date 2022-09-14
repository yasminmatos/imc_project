let nome = window.prompt("Insira seu nome");
let peso = window.prompt("Insira seu peso");
let altura = window.prompt("Insira sua altura");

document.querySelector("#nome").innerHTML = nome;
document.querySelector("#peso").innerHTML = peso;
document.querySelector("#altura").innerHTML = altura;

function calcIMC() {
    const imc = peso/(altura * altura);
    return document.querySelector("#result").innerHTML = "Seu IMC é de: " + imc;
}


calcIMC();
 


