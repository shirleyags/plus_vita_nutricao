

const titulo = document.querySelector(".titulo");
titulo.textContent = "PlusVita Nutrição"



const pacientes = document.querySelectorAll(".paciente");


function calculoImc(peso,altura){
       let imc = peso / (altura * altura);
       
       return imc.toFixed(2);
}

for(let i = 0; i < pacientes.length; i++){

let pacienteTodos = pacientes[i];


const primeiroPacienteAlt = pacienteTodos.querySelector(".info-altura");
const primeiroPacientePeso = pacienteTodos.querySelector(".info-peso");
const pacienteImc = pacienteTodos.querySelector(".info-imc");


const conteudoAltura = primeiroPacienteAlt.textContent;
const conteudoPeso = primeiroPacientePeso.textContent;


if ((conteudoAltura <= 0 || conteudoAltura >= 3.00) && (conteudoPeso <= 0 || conteudoPeso >= 1000)){
       pacienteImc.textContent = "Altura e Peso Inválidos";
       pacienteTodos.classList.add("paciente-invalido");
}
else if (conteudoAltura <= 0 || conteudoAltura >= 3.00) {
       pacienteImc.textContent = "Altura Inválida";
       pacienteTodos.classList.add("paciente-invalido");
}
else if (conteudoPeso <= 0 || conteudoPeso >= 1000) {
       pacienteImc.textContent = "Peso Inválido";
       pacienteTodos.classList.add("paciente-invalido");
}
else {
       pacienteImc.textContent = calculoImc(conteudoPeso,conteudoAltura);
}
}
























